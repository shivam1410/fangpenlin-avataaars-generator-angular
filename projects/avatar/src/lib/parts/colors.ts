import {FacialHairColor, HairColor, HatColor, Skin, ClothesColor} from '../avatar.enum';

export class ColorHelper {
  private static makeColor(hex: string, maskId: string) {
    return `<g
  id='Color/Palette/Gray-01'
  mask='url(${window.location.href}#${maskId})'
  fill-rule='evenodd'
  fill='${hex}'>
  <rect id='pen-Color' x='0' y='0' width='264' height='110' />
    </g>`;
  }

  public static getFacialHairColor(color: FacialHairColor, maskId: string) {
    return ColorHelper.makeColor(ColorHelper.getFacialHairColorHex(color), maskId);
  }

  public static getHairColor(color: HairColor, maskId: string) {
    return ColorHelper.makeColor(ColorHelper.getHairColorHex(color), maskId);
  }

  public static getHatColor(color: HatColor, maskId: string) {
    return ColorHelper.makeColor(ColorHelper.getHatColorHex(color), maskId);
  }

  public static getSkinColor(skin: Skin, maskId: string) {
    return ColorHelper.makeColor(ColorHelper.getSkinColorHex(skin), maskId);
  }

  public static getClothesColor(color: ClothesColor, maskId: string) {
    return ColorHelper.makeColor(ColorHelper.getClothesColorHex(color), maskId);
  }

  public static getFacialHairColorHex(color: FacialHairColor) {
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

  public static getHairColorHex(color: HairColor) {
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

  public static getHatColorHex(color: HatColor) {
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

  public static getSkinColorHex(skin: Skin) {
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

  private static getClothesColorHex(color: ClothesColor) {
    switch (color) {
      case ClothesColor.BLACK:
        return '#262E33';
      case ClothesColor.BLUE1:
        return '#65C9FF';
      case ClothesColor.BLUE2:
        return '#5199E4';
      case ClothesColor.BLUE3:
        return '#25557C';
      case ClothesColor.GRAY1:
        return '#E6E6E6';
      case ClothesColor.GRAY2:
        return '#929598';
      case ClothesColor.HEATHER:
        return '#3C4F5C';
      case ClothesColor.PASTEL_BLUE:
        return '#B1E2FF';
      case ClothesColor.PASTEL_GREEN:
        return '#A7FFC4';
      case ClothesColor.PASTEL_ORANGE:
        return '#FFDEB5';
      case ClothesColor.PASTEL_RED:
        return '#FFAFB9';
      case ClothesColor.PASTEL_YELLOW:
        return '#FFFFB1';
      case ClothesColor.PINK:
        return '#FF488E';
      case ClothesColor.RED:
        return '#FF5C5C';
      case ClothesColor.WHITE:
        return '#FFFFFF';
      default:
        return '';
    }
  }

}
