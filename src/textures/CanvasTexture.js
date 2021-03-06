/**
 * @author mrdoob / http://mrdoob.com/
 */

import { Texture } from './Texture';

function CanvasTexture( canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy ) {

	Texture.call( this, canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

	this.needsUpdate = true;

}

CanvasTexture.prototype = Object.create( Texture.prototype );
CanvasTexture.prototype.constructor = CanvasTexture;


export { CanvasTexture };
