<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->create('privacy_discussions', function (Blueprint $table) {
            $table->integer('discussion_id')->unsigned()->nullable(false)->primary();
            $table->unsignedTinyInteger('privacy')->nullable()->default(1);
        });
        $schema->create('privacy_posts', function (Blueprint $table) {
            $table->integer('post_id')->unsigned()->nullable(false)->primary();
            $table->unsignedTinyInteger('privacy')->nullable()->default(1);
        });
    },
    'down' => function (Builder $schema) {
        $schema->drop('privacy_discussions');
        $schema->drop('privacy_posts');
    }
];
