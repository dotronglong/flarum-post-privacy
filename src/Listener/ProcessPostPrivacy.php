<?php

namespace LD\PostPrivacy\Listener;

use Flarum\Post\Event\Saving;
use Flarum\Post\Post;
use Flarum\Settings\SettingsRepositoryInterface;
use LD\PostPrivacy\Privacy;
use LD\PostPrivacy\PrivacyPost;

class ProcessPostPrivacy
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

        $event->post->afterSave(function (Post $post) use ($privacy) {
            PrivacyPost::build($post->id, $privacy)->save();
        });
    }
}
