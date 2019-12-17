import {extend} from 'flarum/extend';
import app from 'flarum/app';
import PermissionGrid from 'flarum/components/PermissionGrid';
import SettingsModal from '@fof/components/admin/settings/SettingsModal';
import BooleanItem from '@fof/components/admin/settings/items/BooleanItem';

app.initializers.add('ld-post-privacy', app => {
    extend(PermissionGrid.prototype, 'seeAuthor', items => {
        items.add('ld-post-privacy', {
            icon: 'fas fa-shield-alt',
            label: app.translator.trans('ld-post-privacy.admin.permissions.see_author'),
            permission: 'ld.post-privacy.see_author',
            allowGuest: false,
        });
    });

    app.extensionSettings['ld-post-privacy'] = () =>
        app.modal.show(
            new SettingsModal({
                title: app.translator.trans('ld-post-privacy.admin.settings.title'),
                size: 'medium',
                items: [
                    <BooleanItem key="ld-post-privacy-ghost-mode">
                        {app.translator.trans('ld-post-privacy.admin.settings.ghost_mode')}
                    </BooleanItem>,
                ],
            })
        );
});
