<?php

namespace LD\PostPrivacy\Listener;

use Flarum\Discussion\Discussion;
use Flarum\Discussion\Event\Saving;
use Flarum\Settings\SettingsRepositoryInterface;
use LD\PostPrivacy\Privacy;
use LD\PostPrivacy\PrivacyDiscussion;

class ProcessDiscussionPrivacy
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function handle(Saving $event)
    {
        if (!isset($event->data['attributes']['privacy'])) {
            return;
        }

        $privacy = intval($event->data['attributes']['privacy']);
        if (!Privacy::validate($privacy)) {
            return;
        }

        $event->discussion->afterSave(function (Discussion $discussion) use ($privacy) {
            PrivacyDiscussion::build($discussion->id, $privacy)->save();
        });
    }
}
