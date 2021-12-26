function _0x3005(_0x14f899, _0x34c824) {
  const _0x4b9a67 = _0x4b9a();
  return (
    (_0x3005 = function (_0x300524, _0x21ca33) {
      _0x300524 = _0x300524 - 0x185;
      let _0x4e641c = _0x4b9a67[_0x300524];
      return _0x4e641c;
    }),
    _0x3005(_0x14f899, _0x34c824)
  );
}
const _0x4768e5 = _0x3005;
function _0x4b9a() {
  const _0x2a8978 = [
    "49LqJMhr",
    "1052748jvhBsm",
    "category",
    "3812310djYvsh",
    "268768pekpDw",
    "27790BIFmwl",
    "buttons",
    "846519HUTcIh",
    "../buttons/",
    "232OWZKZO",
    "exports",
    "1171296FRRVvc",
    "2CssCiO",
    "308572nEtAps",
    "name",
    "readdirSync",
    ".js",
  ];
  _0x4b9a = function () {
    return _0x2a8978;
  };
  return _0x4b9a();
}
(function (_0x25b61e, _0x115536) {
  const _0x23dc1e = _0x3005,
    _0x2e87af = _0x25b61e();
  while (!![]) {
    try {
      const _0x2a6db6 =
        parseInt(_0x23dc1e(0x193)) / 0x1 +
        (-parseInt(_0x23dc1e(0x192)) / 0x2) *
          (parseInt(_0x23dc1e(0x18d)) / 0x3) +
        (-parseInt(_0x23dc1e(0x18f)) / 0x4) *
          (-parseInt(_0x23dc1e(0x18b)) / 0x5) +
        -parseInt(_0x23dc1e(0x187)) / 0x6 +
        (parseInt(_0x23dc1e(0x186)) / 0x7) *
          (-parseInt(_0x23dc1e(0x18a)) / 0x8) +
        -parseInt(_0x23dc1e(0x191)) / 0x9 +
        parseInt(_0x23dc1e(0x189)) / 0xa;
      if (_0x2a6db6 === _0x115536) break;
      else _0x2e87af["push"](_0x2e87af["shift"]());
    } catch (_0x4e25d2) {
      _0x2e87af["push"](_0x2e87af["shift"]());
    }
  }
})(_0x4b9a, 0x2e324);
const fs = require("fs");
module[_0x4768e5(0x190)] = (_0x113f3f, _0x241c9e) => {
  const _0x558287 = _0x4768e5,
    _0x74d0bc = fs[_0x558287(0x195)]("./src/buttons/");
  for (const _0x468ce5 of _0x74d0bc) {
    const _0x2a8f41 = fs["readdirSync"]("./src/buttons/" + _0x468ce5)["filter"](
      (_0x4fb436) => _0x4fb436["endsWith"](_0x558287(0x185))
    );
    for (const _0x3001f2 of _0x2a8f41) {
      const _0x221507 = require(_0x558287(0x18e) + _0x468ce5 + "/" + _0x3001f2);
      (_0x221507[_0x558287(0x188)] = _0x468ce5),
        !_0x221507["name"] && (_0x221507[_0x558287(0x194)] = _0x468ce5),
        _0x113f3f[_0x558287(0x18c)]["set"](
          _0x221507[_0x558287(0x194)],
          _0x221507
        );
    }
  }
};
