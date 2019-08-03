import {Injectable} from '@angular/core';
import {FacialHairColor} from '../enums/facial-hair-color.enum';
import {HairColor} from '../enums/hair-color.enum';
import {Skin} from '../enums/skin.enum';
import {ClothColor} from '../enums/cloth-color.enum';
import {HatColor} from '../enums/hat-color.enum';

@Injectable()
export class ColorsServices {
  private makeColor(hex: string, maskId: string) {
    return `
  <g
  id='Color/Palette/Gray-01'
  mask='url(#${maskId})'
  fill-rule='evenodd'
  fill='${hex}'>
  <rect id='pen-Color' x='0' y='0' width='264' height='110' />
    </g>`;
  }

  public getfacialHairColor(color: FacialHairColor, maskId: string) {
    return this.makeColor(this._getfacialHairColorHex(color), maskId);
  }

  public gethairColor(color: HairColor, maskId: string) {
    return this.makeColor(this._gethairColorHex(color), maskId);
  }

  public gethatColor(color: HatColor, maskId: string) {
    return this.makeColor(this._gethatColorHex(color), maskId);
  }

  public getskinSvg(skin: Skin, maskId: string) {
    return this.makeColor(this._getskinColorHex(skin), maskId);
  }

  public clothColor(color: ClothColor, maskId: string) {
    return this.makeColor(this._getclothColorHex(color), maskId);
  }

  public _getfacialHairColorHex(color: FacialHairColor) {
    switch (color) {
      case FacialHairColor.AUBURN:
        return '#A55728';
      case FacialHairColor.BLACK:
        return '#2C1B18';
      case FacialHairColor.BLONDE:
        return '#B58143';
      case FacialHairColor.BLONDE_GOLDEN:
        return '#D6B370';
      case FacialHairColor.BROWN:
        return '#724133';
      case FacialHairColor.BROWN_DARK:
        return '#4A312C';
      case FacialHairColor.PASTEL_PINK:
        return '#ECDCBF';
      case FacialHairColor.RED:
        return '#C93305';
      case FacialHairColor.SILVER_RED:
        return '#F59797';
      default:
        return '';
    }
  }

  public _gethairColorHex(color: HairColor) {
    switch (color) {
      case HairColor.AURBURN:
        return '#A55728';
      case HairColor.BLACK:
        return '#2C1B18';
      case HairColor.BLONDE:
        return '#B58143';
      case HairColor.blondegolden:
        return '#D6B370';
      case HairColor.BROWN:
        return '#724133';
      case HairColor.browndark:
        return '#4A312C';
      case HairColor.pastelpink:
        return '#F59797';
      case HairColor.PLATINUM:
        return '#ECDCBF';
      case HairColor.RED:
        return '#C93305';
      case HairColor.silvergray:
        return '#E8E1E1';
      default:
        return '';
    }
  }

  public _gethatColorHex(color: HatColor) {
    switch (color) {
      case HatColor.BLACK:
        return '#262E33';
      case HatColor.BLUE01:
        return '#65C9FF';
      case HatColor.BLUE02:
        return '#5199E4';
      case HatColor.BLUE03:
        return '#25557C';
      case HatColor.GRAY01:
        return '#E6E6E6';
      case HatColor.GRAY02:
        return '#929598';
      case HatColor.HEATHER:
        return '#3C4F5C';
      case HatColor.PASTEL_BLUE:
        return '#B1E2FF';
      case HatColor.PASTEL_GREEN:
        return '#A7FFC4';
      case HatColor.PASTEL_ORANGE:
        return '#FFDEB5';
      case HatColor.PASTEL_RED:
        return '#FFAFB9';
      case HatColor.PASTEL_YELLOW:
        return '#FFFFB1';
      case HatColor.PINK:
        return '#FF488E';
      case HatColor.RED:
        return '#FF5C5C';
      case HatColor.WHITE:
        return '#FFFFFF';
      default:
        return '';
    }
  }

  public _getskinColorHex(skin: Skin) {
    switch (skin) {
      case Skin.TANNED:
        return '#FD9841';
      case Skin.YELLOW:
        return '#F8D25C';
      case Skin.PALE:
        return '#FFDBB4';
      case Skin.LIGHT:
        return '#EDB98A';
      case Skin.BROWN:
        return '#D08B5B';
      case Skin.DARK_BROWN:
        return '#AE5D29';
      case Skin.BLACK:
        return '#614335';
      default:
        return '';
    }
  }

  public _getclothColorHex(color: ClothColor) {
    switch (color) {
      case ClothColor.BLACK:
        return '#262E33';
      case ClothColor.BLUE1:
        return '#65C9FF';
      case ClothColor.BLUE2:
        return '#5199E4';
      case ClothColor.BLUE3:
        return '#25557C';
      case ClothColor.GRAY1:
        return '#E6E6E6';
      case ClothColor.GRAY2:
        return '#929598';
      case ClothColor.HEATHER:
        return '#3C4F5C';
      case ClothColor.PASTEL_BLUE:
        return '#B1E2FF';
      case ClothColor.PASTEL_GREEN:
        return '#A7FFC4';
      case ClothColor.PASTEL_ORANGE:
        return '#FFDEB5';
      case ClothColor.PASTEL_RED:
        return '#FFAFB9';
      case ClothColor.PASTEL_YELLOW:
        return '#FFFFB1';
      case ClothColor.PINK:
        return '#FF488E';
      case ClothColor.RED:
        return '#FF5C5C';
      case ClothColor.WHITE:
        return '#FFFFFF';
      default:
        return '';
    }
  }

}
