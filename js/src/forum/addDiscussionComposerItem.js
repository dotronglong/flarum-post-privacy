import { extend } from 'flarum/extend';
import Composer from 'flarum/components/Composer';
import ComposerButton from 'flarum/components/ComposerButton';

import PostPrivacyModal from './components/PostPrivacyModal';

export default () => {

    Composer.prototype.changePrivacy = function() {
        app.modal.show(
            new PostPrivacyModal({
                privacy: this.privacy,
                onsubmit: privacy => (this.privacy = privacy),
            })
        );
    };

    // Add button to DiscussionComposer header
    extend(Composer.prototype, 'controlItems', function(items) {
        items.add('privacy', ComposerButton.component({
            icon: 'fas fa-shield-alt minimize',
            title: app.translator.trans('dotronglong-post-privacy.forum.composer.privacy_tooltip'),
            onclick: this.changePrivacy.bind(this)
        }), 1);
    });

    extend(Composer.prototype, 'data', function(data) {
        console.log(data, this.privacy);
        if (this.privacy) {
            data.privacy = this.privacy;
        }
    });
};
