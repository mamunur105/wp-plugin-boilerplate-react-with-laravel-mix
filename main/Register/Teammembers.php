<?php

namespace TinySolutions\boilerplate\Register;

use TinySolutions\boilerplate\Abs\CustomPostType;

class Teammembers extends CustomPostType {
	// must use
	function set_post_type_name() {
		return 'team_member';
	}
}
