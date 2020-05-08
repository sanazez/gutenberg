/**
 * WordPress dependencies
 */
import { MenuItem } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { FilteredComponent } from '@wordpress/interface';
import { MediaUpload } from '@wordpress/media-utils';
import { registerPlugin } from '@wordpress/plugins';
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import CopyContentMenuItem from './copy-content-menu-item';
import ManageBlocksMenuItem from './manage-blocks-menu-item';
import KeyboardShortcutsHelpMenuItem from './keyboard-shortcuts-help-menu-item';
import ToolsMoreMenuGroup from '../components/header/tools-more-menu-group';
import WelcomeGuideMenuItem from './welcome-guide-menu-item';

registerPlugin( 'edit-post', {
	render() {
		return (
			<>
				<FilteredComponent
					hookName="editor.MediaUpload"
					namespace="core/edit-post/replace-media-upload"
				>
					{ () => <MediaUpload /> }
				</FilteredComponent>
				<ToolsMoreMenuGroup>
					{ ( { onClose } ) => (
						<>
							<ManageBlocksMenuItem onSelect={ onClose } />
							<MenuItem
								role="menuitem"
								href={ addQueryArgs( 'edit.php', {
									post_type: 'wp_block',
								} ) }
							>
								{ __( 'Manage all reusable blocks' ) }
							</MenuItem>
							<KeyboardShortcutsHelpMenuItem
								onSelect={ onClose }
							/>
							<WelcomeGuideMenuItem />
							<CopyContentMenuItem />
							<MenuItem
								role="menuitem"
								href={ __(
									'https://wordpress.org/support/article/wordpress-editor/'
								) }
								target="_blank"
								rel="noopener noreferrer"
							>
								{ __( 'Help' ) }
							</MenuItem>
						</>
					) }
				</ToolsMoreMenuGroup>
			</>
		);
	},
} );
