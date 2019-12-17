import Button from 'flarum/components/Button';
import Modal from 'flarum/components/Modal';
import Switch from 'flarum/components/Switch';

export default class PostPrivacyModal extends Modal {
    init() {
        super.init();

        this.privacy = m.prop(false);
    }

    title() {
        return app.translator.trans('dotronglong-post-privacy.forum.modal.title');
    }

    className() {
        return 'PostPrivacyDiscussionModal Modal--small';
    }

    content() {
        return [
            <div className="Modal-body">
                <div className="PostPrivacyDiscussionModal-form">
                    <div className="Form-group">
                        <label className="label">{app.translator.trans('dotronglong-post-privacy.forum.modal.privacy_label')}</label>

                        <input type="text" name="question" className="FormControl" bidi={this.question} />
                    </div>

                    <div className="Form-group">
                        {Button.component({
                            type: 'submit',
                            className: 'Button Button--primary PostPrivacyModal-SubmitButton',
                            children: app.translator.trans('dotronglong-post-privacy.forum.modal.submit'),
                            loading: this.loading,
                        })}
                    </div>
                </div>
            </div>,
        ];
    }

    displayOptions() {
        return Object.keys(this.options).map((el, i) => (
            <div className={this.options[i + 1] === '' ? 'Form-group hide' : 'Form-group'}>
                <fieldset className="Poll-answer-input">
                    <input
                        className="FormControl"
                        type="text"
                        name={'answer' + (i + 1)}
                        bidi={this.options[i]}
                        placeholder={app.translator.trans('fof-polls.forum.modal.option_placeholder') + ' #' + (i + 1)}
                    />
                </fieldset>
                {i >= 2
                    ? Button.component({
                          type: 'button',
                          className: 'Button Button--warning PollModal--button',
                          icon: 'fas fa-minus',
                          onclick: i >= 2 ? this.removeOption.bind(this, i) : '',
                      })
                    : ''}
            </div>
        ));
    }

    addOption() {
        const setting = app.data['fof-polls.options.max'];
        const max = (setting && parseInt(setting)) || 11;

        if (this.options.length < max) {
            this.options.push(m.prop(''));
        } else {
            alert(app.translator.trans('fof-polls.forum.modal.max'));
        }
    }

    removeOption(option) {
        this.options.splice(option, 1);
    }

    onsubmit(e) {
        e.preventDefault();

        const poll = {
            question: this.question(),
            endDate: this.endDate(),
            publicPoll: this.publicPoll(),
        };
        const options = this.options.map(a => a()).filter(Boolean);

        if (this.question() === '') {
            alert(app.translator.trans('fof-polls.forum.modal.include_question'));

            return;
        }

        if (options.length < 2) {
            alert(app.translator.trans('fof-polls.forum.modal.min'));

            return;
        }

        poll.relationships = { options };

        this.props.onsubmit(poll);

        app.modal.close();
    }
}
