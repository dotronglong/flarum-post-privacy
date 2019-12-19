<?php

namespace LD\PostPrivacy;

use Flarum\Database\AbstractModel;

class PrivacyPost extends AbstractModel
{
    protected $fillable = [
        'post_id',
        'privacy'
    ];

    public static function build($postId, $privacy)
    {
        return new PrivacyPost([
            'post_id' => $postId,
            'privacy' => $privacy
        ]);
    }
}
