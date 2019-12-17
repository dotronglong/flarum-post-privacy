import {extend} from 'flarum/extend';
import app from 'flarum/app';

import addDiscussionComposerItem from './addDiscussionComposerItem';

app.initializers.add('dotronglong-post-privacy', () => {
    addDiscussionComposerItem();
});
