const _0x574981 = _0x317e;
function _0x4f59() {
  const _0x5485b1 = [
    "1987461ghaLrh",
    "1659056xxNFpi",
    "filter",
    "5zwjoXC",
    "\x0a[+]\x20",
    "bold",
    "53470xPiyvP",
    "category",
    "name",
    "27yuSjOP",
    "399678XfXeRu",
    "38072YDQEnr",
    "set",
    "../utilities/r1mo",
    "commands",
    "exports",
    "push",
    "235953NQGWYy",
    "12BVMbUm",
    "../commands/",
    "green",
    "398456MAJftH",
    "./src/commands/",
    "length",
  ];
  _0x4f59 = function () {
    return _0x5485b1;
  };
  return _0x4f59();
}
function _0x317e(_0x19e920, _0x4487a9) {
  const _0x4f5915 = _0x4f59();
  return (
    (_0x317e = function (_0x317e4f, _0x42f957) {
      _0x317e4f = _0x317e4f - 0x170;
      let _0x34c6a6 = _0x4f5915[_0x317e4f];
      return _0x34c6a6;
    }),
    _0x317e(_0x19e920, _0x4487a9)
  );
}
(function (_0xe515b9, _0x5a28b8) {
  const _0x59b01e = _0x317e,
    _0xcfda32 = _0xe515b9();
  while (!![]) {
    try {
      const _0x2ab8c3 =
        -parseInt(_0x59b01e(0x17e)) / 0x1 +
        (parseInt(_0x59b01e(0x178)) / 0x2) *
          (parseInt(_0x59b01e(0x17f)) / 0x3) +
        parseInt(_0x59b01e(0x186)) / 0x4 +
        (-parseInt(_0x59b01e(0x170)) / 0x5) *
          (parseInt(_0x59b01e(0x177)) / 0x6) +
        parseInt(_0x59b01e(0x185)) / 0x7 +
        (parseInt(_0x59b01e(0x182)) / 0x8) *
          (-parseInt(_0x59b01e(0x176)) / 0x9) +
        parseInt(_0x59b01e(0x173)) / 0xa;
      if (_0x2ab8c3 === _0x5a28b8) break;
      else _0xcfda32["push"](_0xcfda32["shift"]());
    } catch (_0x26125d) {
      _0xcfda32["push"](_0xcfda32["shift"]());
    }
  }
})(_0x4f59, 0x501ff);
const fs = require("fs"),
  { term } = require(_0x574981(0x17a));
module[_0x574981(0x17c)] = async (_0x5bc5eb, _0x1d1d9f) => {
  const _0x16aeb0 = _0x574981,
    _0x1b3dc8 = fs["readdirSync"](_0x16aeb0(0x183)),
    _0x5717a4 = [];
  for (const _0x569a24 of _0x1b3dc8) {
    const _0x440f19 = fs["readdirSync"](_0x16aeb0(0x183) + _0x569a24)[
      _0x16aeb0(0x187)
    ]((_0x4221de) => _0x4221de["endsWith"](".js"));
    for (const _0x49cfc8 of _0x440f19) {
      const _0x9f49eb = require(_0x16aeb0(0x180) + _0x569a24 + "/" + _0x49cfc8);
      (_0x9f49eb[_0x16aeb0(0x174)] = _0x569a24),
        await _0x5bc5eb[_0x16aeb0(0x17b)][_0x16aeb0(0x179)](
          _0x9f49eb[_0x16aeb0(0x175)],
          _0x9f49eb
        ),
        _0x5717a4[_0x16aeb0(0x17d)](_0x9f49eb);
    }
  }
  term[_0x16aeb0(0x172)][_0x16aeb0(0x181)](
    _0x16aeb0(0x171) + _0x5717a4[_0x16aeb0(0x184)] + "\x20Commands"
  );
};
