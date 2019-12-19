<?php

namespace LD\PostPrivacy;

use Flarum\Extend;
use Flarum\Discussion\Event\Saving;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    new Extend\Locales(__DIR__ . '/locale'),
    new \LD\PostPrivacy\Extend\Settings(),
    function (Dispatcher $events) {
        $events->listen(Saving::class, Listener\ProcessPostPrivacy::class);
    }
];
