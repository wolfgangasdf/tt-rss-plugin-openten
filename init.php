<?php
class Openten extends Plugin {

	private $host;

	function about() {
		return array(1.0,
			"Add button to open 10 articles in tabs and unstar them.",
			"wolfgang");
	}

	function init($host) {
		$this->host = $host;

		$host->add_hook($host::HOOK_TOOLBAR_BUTTON, $this);
	}

	function get_js() {
		return file_get_contents(dirname(__FILE__) . "/openten.js");
	}
	
	function hook_toolbar_button() {
		?>

		<button dojoType="dijit.form.Button" onclick="openUnstarNext10()">
			<?php echo __('Open ten articles') ?>
		</button>

		<?php
	}

	function api_version() {
		return 2;
	}

}
?>
