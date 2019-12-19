<?php

namespace LD\PostPrivacy;

use Flarum\Database\AbstractModel;

class PrivacyDiscussion extends AbstractModel
{
    protected $fillable = [
        'discussion_id',
        'privacy'
    ];

    public static function build($discussionId, $privacy)
    {
        return new PrivacyDiscussion([
            'discussion_id' => $discussionId,
            'privacy' => $privacy
        ]);
    }
}
