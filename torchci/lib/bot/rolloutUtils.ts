const landCheckPilotGroup = new Set([
  "landchecktestuser",
  "zengk95",
  "atalman",
  "clee2000",
  "huydhn",
  "izaitsevfb",
  "mehtanirav",
  "weiwangmeta",
  "ZainRizvi",
  "janeyx99",
  "DanilBaibak",
  "jeanschmidt",
  "osalpekar",
  "malfet",
  "kit1980",
  // Core
  "albanD",
  "anjali411",
  "bdhirsh",
  "cpuhrsch",
  "drisspg",
  "george-qi",
  "soulitzer",
  "jbschlosser",
  "mikaylagawarecki",
  "mruberry",
  "ngimel",
  "zou3519",
  "saketh-are",
  "samdow",
  "SherlockNoMad",
  "dagitses",
  // Distributed
  "aazzolini",
  "awgu",
  "yhcharles",
  "H-Huang",
  "wz337",
  "fduwjj",
  "kwen2501",
  "mingzhe09088",
  "pbelevich",
  "pritamdamania87",
  "kumpera",
  "rohan-varma",
  "mrshenli",
  "wanchaol",
  "zhaojuanmao",
  "yaroslavvb",
  // Quansight
  "nkaretnikov",
  "pearu",
  "ysiraichi",
  "vfdev-5",
  "pmeier",
  "bjuncek",
  "lezcano",
  "nikitaved",
  "kurtamohler",
  "kshitij12345",
  "peterbell10",
  "HaoZeke",
  "amjames",
  "fdrocha",
]);

export function isInLandCheckAllowlist(username: string) {
  return landCheckPilotGroup.has(username);
}
