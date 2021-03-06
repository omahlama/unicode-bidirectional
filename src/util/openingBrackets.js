// A map to show "opening brackets",
// for example: (, [, {, ...
// Compiled from: http://www.unicode.org/Public/UCD/latest/ucd/BidiBrackets.txt
const openingBrackets = new Set([
  0x0028, // LEFT PARENTHESIS
  0x005B, // LEFT SQUARE BRACKET
  0x007B, // LEFT CURLY BRACKET
  0x0F3A, // TIBETAN MARK GUG RTAGS GYON
  0x0F3C, // TIBETAN MARK ANG KHANG GYON
  0x169B, // OGHAM FEATHER MARK
  0x2045, // LEFT SQUARE BRACKET WITH QUILL
  0x207D, // SUPERSCRIPT LEFT PARENTHESIS
  0x208D, // SUBSCRIPT LEFT PARENTHESIS
  0x2308, // LEFT CEILING
  0x230A, // LEFT FLOOR
  0x2329, // LEFT-POINTING ANGLE BRACKET
  0x2768, // MEDIUM LEFT PARENTHESIS ORNAMENT
  0x276A, // MEDIUM FLATTENED LEFT PARENTHESIS ORNAMENT
  0x276C, // MEDIUM LEFT-POINTING ANGLE BRACKET ORNAMENT
  0x276E, // HEAVY LEFT-POINTING ANGLE QUOTATION MARK ORNAMENT
  0x2770, // HEAVY LEFT-POINTING ANGLE BRACKET ORNAMENT
  0x2772, // LIGHT LEFT TORTOISE SHELL BRACKET ORNAMENT
  0x2774, // MEDIUM LEFT CURLY BRACKET ORNAMENT
  0x27C5, // LEFT S-SHAPED BAG DELIMITER
  0x27E6, // MATHEMATICAL LEFT WHITE SQUARE BRACKET
  0x27E8, // MATHEMATICAL LEFT ANGLE BRACKET
  0x27EA, // MATHEMATICAL LEFT DOUBLE ANGLE BRACKET
  0x27EC, // MATHEMATICAL LEFT WHITE TORTOISE SHELL BRACKET
  0x27EE, // MATHEMATICAL LEFT FLATTENED PARENTHESIS
  0x2983, // LEFT WHITE CURLY BRACKET
  0x2985, // LEFT WHITE PARENTHESIS
  0x2987, // Z NOTATION LEFT IMAGE BRACKET
  0x2989, // Z NOTATION LEFT BINDING BRACKET
  0x298B, // LEFT SQUARE BRACKET WITH UNDERBAR
  0x298D, // LEFT SQUARE BRACKET WITH TICK IN TOP CORNER
  0x298F, // LEFT SQUARE BRACKET WITH TICK IN BOTTOM CORNER
  0x2991, // LEFT ANGLE BRACKET WITH DOT
  0x2993, // LEFT ARC LESS-THAN BRACKET
  0x2995, // DOUBLE LEFT ARC GREATER-THAN BRACKET
  0x2997, // LEFT BLACK TORTOISE SHELL BRACKET
  0x29D8, // LEFT WIGGLY FENCE
  0x29DA, // LEFT DOUBLE WIGGLY FENCE
  0x29FC, // LEFT-POINTING CURVED ANGLE BRACKET
  0x2E22, // TOP LEFT HALF BRACKET
  0x2E24, // BOTTOM LEFT HALF BRACKET
  0x2E26, // LEFT SIDEWAYS U BRACKET
  0x2E28, // LEFT DOUBLE PARENTHESIS
  0x3008, // LEFT ANGLE BRACKET
  0x300A, // LEFT DOUBLE ANGLE BRACKET
  0x300C, // LEFT CORNER BRACKET
  0x300E, // LEFT WHITE CORNER BRACKET
  0x3010, // LEFT BLACK LENTICULAR BRACKET
  0x3014, // LEFT TORTOISE SHELL BRACKET
  0x3016, // LEFT WHITE LENTICULAR BRACKET
  0x3018, // LEFT WHITE TORTOISE SHELL BRACKET
  0x301A, // LEFT WHITE SQUARE BRACKET
  0xFE59, // SMALL LEFT PARENTHESIS
  0xFE5B, // SMALL LEFT CURLY BRACKET
  0xFE5D, // SMALL LEFT TORTOISE SHELL BRACKET
  0xFF08, // FULLWIDTH LEFT PARENTHESIS
  0xFF3B, // FULLWIDTH LEFT SQUARE BRACKET
  0xFF5B, // FULLWIDTH LEFT CURLY BRACKET
  0xFF5F, // FULLWIDTH LEFT WHITE PARENTHESIS
  0xFF62  // HALFWIDTH LEFT CORNER BRACKET
]);

export default openingBrackets;
