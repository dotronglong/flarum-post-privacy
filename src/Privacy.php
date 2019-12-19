<?php

namespace LD\PostPrivacy;

class Privacy
{
    const PUBLIC = 1;
    const ANONYMOUS = 2;
    const GHOST = 3;

    public static function validate($privacy)
    {
        return in_array($privacy, [
            self::PUBLIC,
            self::ANONYMOUS,
            self::GHOST
        ]);
    }
}
