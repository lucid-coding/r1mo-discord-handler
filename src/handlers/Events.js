const _0x57388b = _0x5ed0;
function _0x5ed0(_0x35c3f8, _0x968901) {
  const _0x256d78 = _0x256d();
  return (
    (_0x5ed0 = function (_0x5ed032, _0x121721) {
      _0x5ed032 = _0x5ed032 - 0xe2;
      let _0x3e3fc2 = _0x256d78[_0x5ed032];
      return _0x3e3fc2;
    }),
    _0x5ed0(_0x35c3f8, _0x968901)
  );
}
(function (_0x451534, _0x1c6d7b) {
  const _0x20a75a = _0x5ed0,
    _0x2308f1 = _0x451534();
  while (!![]) {
    try {
      const _0x5e6465 =
        (-parseInt(_0x20a75a(0xf5)) / 0x1) *
          (-parseInt(_0x20a75a(0xea)) / 0x2) +
        parseInt(_0x20a75a(0xeb)) / 0x3 +
        (parseInt(_0x20a75a(0xe8)) / 0x4) * (parseInt(_0x20a75a(0xef)) / 0x5) +
        (parseInt(_0x20a75a(0xf9)) / 0x6) * (-parseInt(_0x20a75a(0xf0)) / 0x7) +
        -parseInt(_0x20a75a(0xe2)) / 0x8 +
        (parseInt(_0x20a75a(0xe6)) / 0x9) * (-parseInt(_0x20a75a(0xfa)) / 0xa) +
        parseInt(_0x20a75a(0xf8)) / 0xb;
      if (_0x5e6465 === _0x1c6d7b) break;
      else _0x2308f1["push"](_0x2308f1["shift"]());
    } catch (_0x113301) {
      _0x2308f1["push"](_0x2308f1["shift"]());
    }
  }
})(_0x256d, 0x796bc);
const fs = require("fs"),
  { term } = require(_0x57388b(0xe9)),
  r1mo = require("../utilities/r1mo");
function _0x256d() {
  const _0x122d06 = [
    "1738194iqvfPZ",
    "readdirSync",
    "exports",
    "./src/events/",
    "10gLvVxB",
    "7uxXyPU",
    "execute",
    "once",
    "\x0a[+]\x20",
    "bold",
    "47903QbbJEj",
    "name",
    "length",
    "4464130qFbuGT",
    "5696658OEWUur",
    "1165330HmfNyT",
    "2816952ejqDZl",
    "push",
    ".js",
    "endsWith",
    "36LeiInB",
    "filter",
    "643492CgZldD",
    "../utilities/r1mo",
    "40oSfPCC",
  ];
  _0x256d = function () {
    return _0x122d06;
  };
  return _0x256d();
}
module[_0x57388b(0xed)] = (_0x37f7cd, _0x2e2ad5) => {
  const _0x3443a3 = _0x57388b,
    _0x41da3e = fs[_0x3443a3(0xec)]("./src/events/"),
    _0xab3afd = [];
  for (const _0x8b9bc of _0x41da3e) {
    const _0x15268c = fs[_0x3443a3(0xec)](_0x3443a3(0xee) + _0x8b9bc)[
      _0x3443a3(0xe7)
    ]((_0xc227a5) => _0xc227a5[_0x3443a3(0xe5)](_0x3443a3(0xe4)));
    for (const _0x5574db of _0x15268c) {
      const _0x4a02cb = require("../events/" + _0x8b9bc + "/" + _0x5574db);
      _0x4a02cb[_0x3443a3(0xf2)]
        ? _0x37f7cd["once"](_0x4a02cb["name"], (..._0x2a1082) => {
            const _0x48b579 = _0x3443a3;
            _0x4a02cb[_0x48b579(0xf1)](
              ..._0x2a1082,
              _0x37f7cd,
              _0x2e2ad5,
              r1mo
            );
          })
        : _0x37f7cd["on"](_0x4a02cb[_0x3443a3(0xf6)], async (..._0x69d418) => {
            _0x4a02cb["execute"](..._0x69d418, _0x37f7cd, _0x2e2ad5, r1mo);
          }),
        _0xab3afd[_0x3443a3(0xe3)](_0x4a02cb);
    }
  }
  term[_0x3443a3(0xf4)]["green"](
    _0x3443a3(0xf3) + _0xab3afd[_0x3443a3(0xf7)] + "\x20Events"
  );
};
