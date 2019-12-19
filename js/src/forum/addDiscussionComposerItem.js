import { extend } from 'flarum/extend';
import Composer from 'flarum/components/Composer';
import DiscussionComposer from 'flarum/components/DiscussionComposer';
import ComposerButton from 'flarum/components/ComposerButton';

import PostPrivacyModal from './components/PostPrivacyModal';

export default () => {

    Composer.prototype.changePrivacy = function() {
        app.modal.show(
            new PostPrivacyModal({
                privacy: app.composer.props.privacy === undefined ? 1 : app.composer.props.privacy,
                onsubmit: privacy => (app.composer.props.privacy = privacy),
            })
        );
    };

    extend(Composer.prototype, 'controlItems', function(items) {
        let buttonClassname = "Button Button--icon Button--link ";
        let buttonTitle = "";
        const privacy = app.composer.props.privacy;
        if (privacy === undefined || privacy === 1) {
            buttonClassname += "privacy-text-public";
            buttonTitle = app.translator.trans('dotronglong-post-privacy.forum.modal.privacy_public_label');
        } else if (privacy === 2) {
            buttonClassname += "privacy-text-anonymous";
            buttonTitle = app.translator.trans('dotronglong-post-privacy.forum.modal.privacy_anonymous_label');
        } else if (privacy === 3) {
            buttonClassname += "privacy-text-ghost";
            buttonTitle = app.translator.trans('dotronglong-post-privacy.forum.modal.privacy_ghost_label');
        }
        items.add('privacy', ComposerButton.component({
            icon: 'fas fa-shield-alt minimize',
            className: buttonClassname,
            title: buttonTitle,
            onclick: this.changePrivacy
        }), 1);
    });

    extend(DiscussionComposer.prototype, 'data', function(data) {
        if (app.composer.props.privacy) {
            data.privacy = app.composer.props.privacy;
        }
    });
};
