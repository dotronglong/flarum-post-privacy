import {extend} from 'flarum/extend';
import app from 'flarum/app';
import PermissionGrid from 'flarum/components/PermissionGrid';
import SettingsModal from '@fof/components/admin/settings/SettingsModal';
import BooleanItem from '@fof/components/admin/settings/items/BooleanItem';

app.initializers.add('dotronglong-post-privacy', () => {
    extend(PermissionGrid.prototype, 'moderateItems', items => {
        items.add('dotronglong-post-privacy', {
            icon: 'fas fa-shield-alt',
            label: app.translator.trans('dotronglong-post-privacy.admin.permissions.see_author'),
            permission: 'dotronglong.post-privacy.seeAuthor'
        });
    });

    app.extensionSettings['dotronglong-post-privacy'] = () =>
        app.modal.show(
            new SettingsModal({
                title: app.translator.trans('dotronglong-post-privacy.admin.settings.title'),
                size: 'medium',
                items: [
                    <BooleanItem key="dotronglong-post-privacy-ghost-mode">
                        {app.translator.trans('dotronglong-post-privacy.admin.settings.ghost_mode')}
                    </BooleanItem>,
                ],
            })
        );
});
