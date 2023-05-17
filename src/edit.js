import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
  const [description, setDescription] = useState(attributes.description);

	return (
		<div { ...useBlockProps({
      className: 'uncommon-audio-player',
    }) }>
      <div className='uncommon-audio-player__controls'>
        <div className='uncommon-audio-player__icons'>
          <svg className="speaker-playing" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.681 5.566a1.227 1.227 0 0 1 1.657-.516c4.761 2.497 8.02 7.375 8.02 12.95 0 5.575-3.259 10.453-8.02 12.95a1.227 1.227 0 0 1-1.14-2.173c4.022-2.11 6.706-6.19 6.706-10.777 0-4.587-2.684-8.667-6.706-10.777a1.227 1.227 0 0 1-.517-1.657Zm-7.4 1.09c.438.2.72.636.72 1.117v20.455a1.227 1.227 0 0 1-2.034.925l-6.493-5.658a.41.41 0 0 0-.268-.1H4.5a2.864 2.864 0 0 1-2.863-2.864V15.47A2.864 2.864 0 0 1 4.5 12.606h4.706a.41.41 0 0 0 .268-.1l6.493-5.658a1.227 1.227 0 0 1 1.314-.192Zm-1.735 3.814-4.459 3.886a2.864 2.864 0 0 1-1.881.705H4.5a.41.41 0 0 0-.409.409v5.06c0 .226.183.41.41.41h4.705c.691 0 1.36.25 1.881.704l4.459 3.886V10.47Zm7.103-.019a1.227 1.227 0 0 1 1.668-.48 9.185 9.185 0 0 1 0 16.057 1.227 1.227 0 1 1-1.189-2.147 6.73 6.73 0 0 0 0-11.762 1.227 1.227 0 0 1-.48-1.668Zm-2.05 4.918a1.227 1.227 0 0 1 1.663-.493A3.561 3.561 0 0 1 24.132 18a3.561 3.561 0 0 1-1.87 3.124 1.227 1.227 0 0 1-1.17-2.157c.356-.194.585-.563.585-.967 0-.403-.229-.773-.585-.967a1.227 1.227 0 0 1-.494-1.664Z" fill="#FFC2A9"/>
          </svg>
          <svg className="speaker-muted" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.995 30.731a1.227 1.227 0 0 0 1.736-1.735L7.003 5.269a1.227 1.227 0 0 0-1.735 1.735l23.727 23.727ZM26.18 7.773V22.71l-2.454-2.455V10.47l-3.996 3.483c-.431.376-.926.663-1.457.85l-2.197-2.197h.697c.494 0 .972-.179 1.344-.503l6.03-5.256a1.227 1.227 0 0 1 2.034.926ZM12.272 20.53v-4.786l-1.929-1.929a2.85 2.85 0 0 0-.526 1.655v5.06a2.864 2.864 0 0 0 2.864 2.864h4.092c.494 0 .972.179 1.344.503l6.03 5.256a1.227 1.227 0 0 0 1.57.036l-8.185-8.185a4.509 4.509 0 0 0-.759-.065h-4.092a.41.41 0 0 1-.41-.409Z" fill="#FFC2A9"/>
          </svg>
        </div>
        <div className="uncommon-audio-player__description">
          <TextControl
            label={__('Description')}
            value={attributes.description}
            onChange={(description) => {
              setDescription(description);
              setAttributes({ description });
            }}
          />
        </div>
      </div>
			<InnerBlocks
        allowedBlocks={['core/audio']}
        template={[
          ['core/audio', {}],
        ]}
        templateLock={'all'}
      />
		</div>
	);
}
