
export class AvatarOptions {
  style: AvatarStyle;
  top: Top;
  accessories: Accessories;
  hairColor: HairColor;
  facialHair: FacialHair;
  clothes: Clothes;
  clothColor: ClothesColor;
  eyes: Eyes;
  eyebrow: Eyebrow;
  mouth: Mouth;
  skin: Skin;
  hatColor: HatColor;
  facialHairColor: FacialHairColor;
  graphic: Graphic;
  face: Face;

  constructor() {
    this.style = AvatarStyle.CIRCLE;
    this.top = Top.HIJAB;
    this.face = Face.EYEBROW;
    this.accessories = Accessories.KURTA;
    this.hairColor = HairColor.BROWN;
    this.facialHair = FacialHair.MOUSTACHE_MAGNUM;
    this.clothes = Clothes.BLAZER_SHIRT;
    this.clothColor = ClothesColor.GRAY1;
    this.eyes = Eyes.WINK;
    this.eyebrow = Eyebrow.ANGRY;
    this.mouth = Mouth.SERIOUS;
    this.skin = Skin.LIGHT;
    this.hatColor = HatColor.BLACK;
    this.facialHairColor = FacialHairColor.BLACK;
    this.graphic = Graphic.SKULL;
  }


  getRandom() {
    this.style = this.genrateRandom(AvatarStyle);
    this.top = this.genrateRandom(Top);
    this.face = this.genrateRandom(Face);
    this.accessories = this.genrateRandom(Accessories);
    this.hairColor = this.genrateRandom(HairColor);
    this.facialHair = this.genrateRandom(FacialHair);
    this.clothes = this.genrateRandom(Clothes);
    this.clothColor = this.genrateRandom(ClothesColor);
    this.eyes = this.genrateRandom(Eyes);
    this.eyebrow = this.genrateRandom(Eyebrow);
    this.mouth = this.genrateRandom(Mouth);
    this.skin = this.genrateRandom(Skin);
    this.hatColor = this.genrateRandom(HatColor);
    this.facialHairColor = this.genrateRandom(FacialHairColor);
    this.graphic = this.genrateRandom(Graphic);

  }

  private genrateRandom(enu: any) {
    const e =this.getEnumTuple(enu);
    const len = (Object.keys(e).length) - 1;
    const item = (Math.floor(Math.random() * len) + 0);
    return e[item];
  }
  private getEnumTuple(enumRef: any): Array<any> {
    return Object.keys(enumRef).map(key => {
      return enumRef[key];
    });

  }
}


export enum Accessories {
  BLANK = 'blank',
  KURTA = 'kurta',
  PRESCRIPITON01 = 'prescription01',
  PRESCRIPITON02 = 'prescription02',
  ROUND = 'round',
  SUNGLASSES = 'sunglasses',
  WAYFARERS = 'wayfarers',
}

export enum AvatarStyle {
  CIRCLE = 'circle',
  TRANSPARENT = 'transparent',
}

export enum ClothesColor {
  BLACK = 'black',
  BLUE1 = 'blue1',
  BLUE2 = 'blue2',
  BLUE3 = 'blue3',
  GRAY1 = 'gray1',
  GRAY2 = 'gray2',
  HEATHER = 'heather',
  PASTEL_BLUE = 'pastel_blue',
  PASTEL_GREEN = 'pastel_green',
  PASTEL_ORANGE = 'pastel_orange',
  PASTEL_RED = 'pastel_red',
  PASTEL_YELLOW = 'pastel_yellow',
  PINK = 'pink',
  RED = 'red',
  WHITE = 'white'
}

export enum Clothes {
  BLAZER_SHIRT = 'blazer_shirt',
  BLAZER_SWEATER = 'blazer_sweater',
  COLLAR_SWEATER = 'collar_sweater',
  GRAPHIC_SHIRT = 'graphic_shirt',
  HOODIE = 'hoodie',
  OVERALL = 'OVERALL',
  SHIRT_CREWNECK = 'shirt_crewneck',
  SHIRT_SCOOPNECK = 'shirt_scoopneck',
  SHIRT_VNECK = 'shirt_vneck'
}

export enum Eyebrow {
  ANGRY = 'angry',
  ANGRY_NATURAL = 'angry_natural',
  NONE = 'none',
  DEFAULT_NATURAL = 'default_natural',
  FLAT_NATURAL = 'flat_natural',
  RAISED_EXCITED = 'raised_excited',
  RAISED_EXCITED_NATURAL = 'raised_excited_natural',
  SAD_CONCERNED = 'sad_concerned',
  SAD_CONCERNED_NATURAL = 'sad_concerned_natural',
  UNIBROW_NATURAL = 'unibrow_natural',
  UPDOWN = 'updown',
  UPDOWN_NATURAL = 'updown_natural',
}

export enum Eyes {
  CLOSE = 'close',
  CRY = 'cry',
  NONE = 'none',
  DIZZY ='dizzy' ,
  EYEROLL = 'eyeroll',
  HAPPY = 'happy',
  HEARTS = 'hearts',
  SIDE ='side',
  SQUINT = 'squint',
  SURPRISED = 'surprised',
  WINK = 'wink',
  WINKWACKY = 'winkwacky'
}

export enum Face {
  MOUTH = 'mouth',
  NOSE = 'nose',
  EYES = 'eyes',
  EYEBROW = 'eyebrow',
}

export enum FacialHairColor {
  AUBURN = 'auburn',
  BLACK = ' black',
  BLONDE = 'blonde',
  BLONDE_GOLDEN = 'blonde_golden',
  BROWN = 'brown',
  BROWN_DARK = 'brown_dark',
  PASTEL_PINK = 'pastel_pink',
  PLATINUM = 'platinum',
  RED = 'red',
  SILVER_RED = 'silver_red',
}

export enum FacialHair {
  BLANK = 'BLANK',
  BEARD_MEDIUM = 'beard_medium',
  BEARD_LIGHT = 'beard_light',
  BEARD_MAGESTIC = 'beard_magestic',
  MOUSTACHE_FANCY = 'moustache_fancy',
  MOUSTACHE_MAGNUM = 'moustache_magnum',
}

export enum Graphic {
  BAT = 'bat',
  CUMBIA = 'cumbia',
  DEER = ' deer',
  DIAMOND = 'diamond',
  HOLA = 'hola',
  PIZZA = 'pizza',
  RESIST = 'resist',
  SELENA = 'selena',
  BEAR = 'bear',
  SKULLOUTLINE = 'skulloutline',
  SKULL = 'skull'
}

export enum HairColor {
  AURBURN = 'aurburn',
  BLACK = 'black',
  BLONDE = 'blonde',
  blondegolden = 'blondegolden',
  BROWN = 'brown',
  browndark = 'browndark',
  pastelpink = 'pastelpink',
  PLATINUM = 'platinum',
  RED = 'red',
  silvergray = 'silvergray'
}

export enum HatColor {
  BLACK = 'black',
  BLUE01 = 'blue01',
  BLUE02  = 'blue02',
  BLUE03 = 'blue03',
  GRAY01 = 'gray01',
  GRAY02 = 'gray02',
  HEATHER = 'heather',
  PASTEL_BLUE = 'pastel_blue',
  PASTEL_GREEN = 'pastel_green',
  PASTEL_ORANGE = 'pastel_orange',
  PASTEL_RED = 'pastel_red',
  PASTEL_YELLOW = 'pastel_yellow',
  PINK = 'pink',
  RED = 'red',
  WHITE = 'white',
}

export enum Mouth {
  CONCERNED = 'concerened',
  NONE = 'none',
  DISBELIEF = 'disbelief',
  EATING = 'eating',
  GRIMACE = 'grimface',
  SAD = 'sad',
  SCREAM_OPEN = 'scream_open',
  SERIOUS = 'serious',
  SMILE = 'smile',
  TONGUE = 'tongue',
  TWINKLE = 'twinkle',
  VOMIT = 'vomit',
}

export enum Skin {
  TANNED = 'tanned',
  YELLOW = 'yellow',
  PALE = 'pale',
  LIGHT = 'light',
  BROWN = 'brown',
  DARK_BROWN = 'dark_brown',
  BLACK = 'black',
}

export enum Top {
  NO_HAIR = 'no_hair',
  EYEPATCH = 'eyepatch',
  HAT = 'hat',
  HIJAB = 'hijab',
  TURBAN = 'turban',
  WINTER_HAT1 = 'winter_hat1',
  WINTER_HAT2 = 'winter_hat2',
  WINTER_HAT3 = 'winter_hat3',
  WINTER_HAT4 = 'winter_hat4',
  LONGHAIR_BIGHAIR = 'longhair_bighair',
  LONGHAIR_BOB = 'longhair_bob',
  LONGHAIR_BUN = 'longhair_bun',
  LONGHAIR_CURLY = 'longhair_curly',
  LONGHAIR_CURVY = 'longhair_curvy',
  LONGHAIR_DREADS = 'longhair_dreads',
  LONGHAIR_FRIDA = 'longhair_frida',
  LONGHAIR_FRO = 'longhair_fro',
  LONGHAIR_FROBAND = 'longhair_froband',
  LONGHAIR_NOTTOOLONG = 'longhair_nottoolong',
  LONGHAIRS_HAVEDSIDES = 'longhairs_havedsides',
  LONGHAIR_MIAWALLACE = 'longhair_miawallace',
  LONGHAIR_STRAIGHT = 'longhair_straight',
  LONGHAIR_STRAIGHT2 = 'longhair_straight2',
  LONGHAIR_STRAIGHTSTRAND = 'longhair_straightstrand',
  SHORTHAIR_DREADS01 = 'shorthair_dreads01',
  SHORTHAIR_DREADS02 = 'shorthair_dreads02',
  SHORTHAIR_FRIZZLE = 'shorthair_frizzle',
  SHORTHAIR_SHAGGYMULLET = 'shorthair_shaggymullet',
  SHORTHAIR_SHORTCURLY = 'shorthair_shortcurly',
  SHORTHAIR_SHORTFLAT = 'shorthair_shortflat',
  SHORTHAIR_SHORTROUND = 'shorthair_shortround',
  SHORTHAIR_SHORTWAVED = 'shorthair_shortwaved',
  SHORTHAIR_SIDES = 'shorthair_sides',
  SHORTHAIR_THECAESAR = 'shorthair_thecaesar',
  SHORTHAIR_THECAESARSIDEPART = 'shorthair_thecaesarsidepart',
}
