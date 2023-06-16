<?php
/**
 * Main ActionHooks class.
 *
 * @package TinySolutions\boilerplate
 */

namespace TinySolutions\boilerplate\Controllers\Hooks;

defined( 'ABSPATH' ) || exit();

/**
 * Main ActionHooks class.
 */
class ActionHooks {
	/**
	 * Init Hooks.
	 *
	 * @return void
	 */
	public static function init_hooks() {
		add_action('admin_footer', [ __CLASS__, 'deactivation_popup' ], 99 );
	}

	/***
	 * @param $mimes
	 *
	 * @return mixed
	 */
	public static function deactivation_popup() {
        self::dialog_box_style();
        self::deactivation_scripts();
		?>
		<div id="deactivation-dialog" title="Quick Feedback">
            <!-- Modal content -->
            <div class="modal-content">
                <div id="feedback-form-body">
                    <div class="feedback-input-wrapper">
                        <input id="feedback-deactivate-feedback-no_longer_needed" class="feedback-input" type="radio" name="reason_key" value="no_longer_needed">
                        <label for="feedback-deactivate-feedback-no_longer_needed" class="feedback-label">I no longer need the plugin</label>
                    </div>
                    <div class="feedback-input-wrapper">
                        <input id="feedback-deactivate-feedback-found_a_better_plugin" class="feedback-input" type="radio" name="reason_key" value="found_a_better_plugin">
                        <label for="feedback-deactivate-feedback-found_a_better_plugin" class="feedback-label">I found a better plugin</label>
                        <input class="feedback-feedback-text" type="text" name="reason_found_a_better_plugin" placeholder="Please share which plugin">
                    </div>
                    <div class="feedback-input-wrapper">
                        <input id="feedback-deactivate-feedback-couldnt_get_the_plugin_to_work" class="feedback-input" type="radio" name="reason_key" value="couldnt_get_the_plugin_to_work">
                        <label for="feedback-deactivate-feedback-couldnt_get_the_plugin_to_work" class="feedback-label">I couldn't get the plugin to work</label>
                    </div>
                    <div class="feedback-input-wrapper">
                        <input id="feedback-deactivate-feedback-temporary_deactivation" class="feedback-input" type="radio" name="reason_key" value="temporary_deactivation">
                        <label for="feedback-deactivate-feedback-temporary_deactivation" class="feedback-label">It's a temporary deactivation</label>
                    </div>

                </div>
                <p style="margin: 0 0 20px 0;font-size: 16px;">
                    Please let us know about any issues you are facing with the plugin. How can we improve the plugin?
                </p>
                <textarea id="deactivation-feedback" rows="4" cols="40" placeholder=" Write something"></textarea>
            </div>
		</div>
		<?php
	}

	/***
	 * @param $mimes
	 *
	 * @return mixed
	 */
	public static function dialog_box_style() { ?>
        <style>
            /* Add Animation */
            @-webkit-keyframes animatetop {
                from {top:-300px; opacity:0}
                to {top:0; opacity:1}
            }

            @keyframes animatetop {
                from {top:-300px; opacity:0}
                to {top:0; opacity:1}
            }

            #deactivation-dialog {
                display: none;
            }

            .ui-dialog-titlebar-close {
                display: none;
            }

            /* The Modal (background) */
            #deactivation-dialog .modal {
                display: none; /* Hidden by default */
                position: fixed; /* Stay in place */
                z-index: 1; /* Sit on top */
                padding-top: 100px; /* Location of the box */
                left: 0;
                top: 0;
                width: 100%; /* Full width */
                height: 100%; /* Full height */
                overflow: auto; /* Enable scroll if needed */
            }

            /* Modal Content */
            #deactivation-dialog .modal-content {
                position: relative;
                margin: auto;
                padding: 0;
            }
            #deactivation-dialog .modal-content > * {
                width: 100%;
            }
            #deactivation-dialog .modal-content textarea {
                border: 1px solid rgba(0, 0, 0, 0.1);
                padding: 15px;
            }

            /* The Close Button */
            #deactivation-dialog input[type="radio"] {
                margin: 0;
            }
            .ui-dialog-title {
                font-size: 18px;
                font-weight: 600;
            }

            #deactivation-dialog .modal-body {
                padding: 2px 16px;
            }

            .ui-dialog-buttonset {
                background-color: #fefefe;
                padding: 18px 15px;
                box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
            }

            .ui-dialog-buttonset button {
                min-width: 110px;
                text-align: center;
                border: 1px solid rgba(0, 0, 0, 0.1);
                padding: 0 15px;
                margin-right: 10px;
                border-radius: 5px;
                height: 40px;
                font-size: 15px;
                font-weight: 600;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: 0.3s all;
                background: rgba(0, 0, 0, 0.02);
            }

            .ui-dialog-buttonset button:hover {
                background: #2271b1;
                color: #fff;
            }

            .ui-draggable{
                background-color: #fefefe;
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
            }

            div#deactivation-dialog,
            .ui-draggable .ui-dialog-titlebar {
                padding: 18px 15px;
                box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
                text-align: left;
            }
            
            .modal-content .feedback-input-wrapper {
                margin-bottom: 8px;
                display: flex;
                align-items: center;
                gap: 8px;
                line-height: 2;
            }

        </style>

		<?php
	}

	/***
	 * @param $mimes
	 *
	 * @return mixed
	 */
	public static function deactivation_scripts() {
		wp_enqueue_script( 'jquery-ui-dialog' );
		?>
        <script>
            jQuery(document).ready(function($) {
                // Open the deactivation dialog when the 'Deactivate' link is clicked
                $('.deactivate a').on('click', function(e) {
                    e.preventDefault();
                    openDeactivationDialog();
                });

                // Open the deactivation dialog
                function openDeactivationDialog() {
                    $('#deactivation-dialog').dialog({
                        modal: true,
                        width: 500,
                        buttons: {
                            Submit: function() {
                                submitFeedback();
                            },
                            Cancel: function() {
                                $(this).dialog('close');
                            }
                        }
                    });
                    // Customize the button text
                    $('.ui-dialog-buttonpane button:contains("Submit")').text('Submit & Deactivate');
                    $('.ui-dialog-buttonpane button:contains("Cancel")').text('Skip & Deactivate');
                }

                // Submit the feedback
                function submitFeedback() {
                    var feedback = $('#deactivation-feedback').val();
                    // Perform AJAX request to submit feedback
                    $.ajax({
                        type: 'POST',
                        url: ajaxurl,
                        data: {
                            action: 'submit_deactivation_feedback',
                            feedback: feedback
                        },
                        success: function(response) {
                            // Handle the response
                            // You can show a success message or perform any additional actions
                            // For example:
                            alert('Thank you for your feedback!');
                            $('#deactivation-dialog').dialog('close');
                            location.reload();
                        }
                    });
                }
            });

        </script>

		<?php
	}


}
