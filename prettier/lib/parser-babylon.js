'use strict';

var babylon = function () {
	function unwrapExports(x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var parserBabylon_1 = createCommonjsModule(function (module) {
		"use strict";
		function createError(t, e) {
			var s = new SyntaxError(t + " (" + e.start.line + ":" + e.start.column + ")");return s.loc = e, s;
		}function unwrapExports$$1(t) {
			return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
		}function createCommonjsModule$$1(t, e) {
			return e = { exports: {} }, t(e, e.exports), e.exports;
		}function parse(t, e, s, i) {
			var r = lib,
			    a = s && "json" === s.parser ? "parseExpression" : "parse";var n = void 0;try {
				n = r[a](t, i);
			} catch (e) {
				try {
					n = r[a](t, Object.assign({}, i, { strictMode: !1 }));
				} catch (t) {
					throw parserCreateError(e.message.replace(/ \(.*\)/, ""), { start: { line: e.loc.line, column: e.loc.column + 1 } });
				}
			}return delete n.tokens, n;
		}var parserCreateError = createError,
		    lib = createCommonjsModule$$1(function (t, e) {
			function s(t) {
				this.wrapped = t;
			}function i(t) {
				function e(r, a) {
					try {
						var n = t[r](a),
						    o = n.value,
						    h = o instanceof s;Promise.resolve(h ? o.wrapped : o).then(function (t) {
							h ? e("next", t) : i(n.done ? "return" : "normal", t);
						}, function (t) {
							e("throw", t);
						});
					} catch (t) {
						i("throw", t);
					}
				}function i(t, s) {
					switch (t) {case "return":
							r.resolve({ value: s, done: !0 });break;case "throw":
							r.reject(s);break;default:
							r.resolve({ value: s, done: !1 });}(r = r.next) ? e(r.key, r.arg) : a = null;
				}var r, a;this._invoke = function (t, s) {
					return new Promise(function (i, n) {
						var o = { key: t, arg: s, resolve: i, reject: n, next: null };a ? a = a.next = o : (r = a = o, e(t, s));
					});
				}, "function" != typeof t.return && (this.return = void 0);
			}function r(t, e) {
				t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
			}function a(t) {
				var e = {};for (var s in S) {
					e[s] = t && null != t[s] ? t[s] : S[s];
				}return e;
			}function n(t) {
				var e = t.split(" ");return function (t) {
					return e.indexOf(t) >= 0;
				};
			}function o(t, e) {
				for (var s = 65536, i = 0; i < e.length; i += 2) {
					if ((s += e[i]) > t) return !1;if ((s += e[i + 1]) >= t) return !0;
				}return !1;
			}function h(t) {
				return t < 65 ? 36 === t : t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && q.test(String.fromCharCode(t)) : o(t, U)));
			}function p(t, e) {
				return 64 === t && 64 === e;
			}function c(t) {
				return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && V.test(String.fromCharCode(t)) : o(t, U) || o(t, K))));
			}function l(t) {
				return 10 === t || 13 === t || 8232 === t || 8233 === t;
			}function u(t, e) {
				for (var s = 1, i = 0;;) {
					G.lastIndex = i;var r = G.exec(t);if (!(r && r.index < e)) return new z(s, e - i);++s, i = r.index + r[0].length;
				}throw new Error("Unreachable");
			}function d(t) {
				return t[t.length - 1];
			}function f(t) {
				return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(55296 + (t - 65536 >> 10), 56320 + (t - 65536 & 1023));
			}function m(t) {
				for (var e = {}, s = 0; s < t.length; s++) {
					e[t[s]] = !0;
				}return e;
			}function y(t) {
				return null != t && "Property" === t.type && "init" === t.kind && !1 === t.method;
			}function x(t) {
				return "DeclareExportAllDeclaration" === t.type || "DeclareExportDeclaration" === t.type && (!t.declaration || "TypeAlias" !== t.declaration.type && "InterfaceDeclaration" !== t.declaration.type);
			}function v(t) {
				return "type" === t.importKind || "typeof" === t.importKind;
			}function P(t) {
				return (t.type === O.name || !!t.type.keyword) && "from" !== t.value;
			}function g(t, e) {
				for (var s = [], i = [], r = 0; r < t.length; r++) {
					(e(t[r], r, t) ? s : i).push(t[r]);
				}return [s, i];
			}function b(t) {
				return !!t && ("JSXOpeningFragment" === t.type || "JSXClosingFragment" === t.type);
			}function T(t) {
				if ("JSXIdentifier" === t.type) return t.name;if ("JSXNamespacedName" === t.type) return t.namespace.name + ":" + t.name.name;if ("JSXMemberExpression" === t.type) return T(t.object) + "." + T(t.property);throw new Error("Node had unexpected type: " + t.type);
			}function w(t) {
				if (null == t) throw new Error("Unexpected " + t + " value.");return t;
			}function A(t) {
				if (!t) throw new Error("Assert fail");
			}function C(t) {
				switch (t) {case "any":
						return "TSAnyKeyword";case "boolean":
						return "TSBooleanKeyword";case "never":
						return "TSNeverKeyword";case "number":
						return "TSNumberKeyword";case "object":
						return "TSObjectKeyword";case "string":
						return "TSStringKeyword";case "symbol":
						return "TSSymbolKeyword";case "undefined":
						return "TSUndefinedKeyword";default:
						return;}
			}function E(t, e) {
				return new (t && t.plugins ? N(t.plugins) : ct)(t, e);
			}function N(t) {
				if (t.indexOf("decorators") >= 0 && t.indexOf("decorators2") >= 0) throw new Error("Cannot use decorators and decorators2 plugin together");var e = t.filter(function (t) {
					return "estree" === t || "flow" === t || "jsx" === t || "typescript" === t;
				});if (e.indexOf("flow") >= 0 && (e = e.filter(function (t) {
					return "flow" !== t;
				})).push("flow"), e.indexOf("flow") >= 0 && e.indexOf("typescript") >= 0) throw new Error("Cannot combine flow and typescript plugins.");e.indexOf("typescript") >= 0 && (e = e.filter(function (t) {
					return "typescript" !== t;
				})).push("typescript"), e.indexOf("estree") >= 0 && (e = e.filter(function (t) {
					return "estree" !== t;
				})).unshift("estree");var s = e.join("/"),
				    i = yt[s];if (!i) {
					i = ct;for (var r = 0, a = e; r < a.length; r++) {
						var n = a[r];i = pt[n](i);
					}yt[s] = i;
				}return i;
			}function k(t) {
				return t.program.body.some(function (t) {
					return "ImportDeclaration" === t.type && (!t.importKind || "value" === t.importKind) || "ExportNamedDeclaration" === t.type && (!t.exportKind || "value" === t.exportKind) || "ExportAllDeclaration" === t.type && (!t.exportKind || "value" === t.exportKind) || "ExportDefaultDeclaration" === t.type;
				});
			}Object.defineProperty(e, "__esModule", { value: !0 }), "function" == typeof Symbol && Symbol.asyncIterator && (i.prototype[Symbol.asyncIterator] = function () {
				return this;
			}), i.prototype.next = function (t) {
				return this._invoke("next", t);
			}, i.prototype.throw = function (t) {
				return this._invoke("throw", t);
			}, i.prototype.return = function (t) {
				return this._invoke("return", t);
			};var S = { sourceType: "script", sourceFilename: void 0, startLine: 1, allowReturnOutsideFunction: !1, allowImportExportEverywhere: !1, allowSuperOutsideMethod: !1, plugins: [], strictMode: null, ranges: !1, tokens: !1 },
			    I = !0,
			    L = function L(t, e) {
				void 0 === e && (e = {}), this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.rightAssociative = !!e.rightAssociative, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = 0 === e.binop ? 0 : e.binop || null, this.updateContext = null;
			},
			    M = function (t) {
				function e(e, s) {
					return void 0 === s && (s = {}), s.keyword = e, t.call(this, e, s) || this;
				}return r(e, t), e;
			}(L),
			    D = function (t) {
				function e(e, s) {
					return t.call(this, e, { beforeExpr: I, binop: s }) || this;
				}return r(e, t), e;
			}(L),
			    O = { num: new L("num", { startsExpr: !0 }), bigint: new L("bigint", { startsExpr: !0 }), regexp: new L("regexp", { startsExpr: !0 }), string: new L("string", { startsExpr: !0 }), name: new L("name", { startsExpr: !0 }), eof: new L("eof"), dedent: new L("dedent"), bracketL: new L("[", { beforeExpr: I, startsExpr: !0 }), bracketR: new L("]"), braceL: new L("{", { beforeExpr: I, startsExpr: !0 }), braceBarL: new L("{|", { beforeExpr: I, startsExpr: !0 }), braceR: new L("}"), braceBarR: new L("|}"), parenL: new L("(", { beforeExpr: I, startsExpr: !0 }), parenR: new L(")"), comma: new L(",", { beforeExpr: I }), semi: new L(";", { beforeExpr: I }), colon: new L(":", { beforeExpr: I }), doubleColon: new L("::", { beforeExpr: I }), dot: new L("."), question: new L("?", { beforeExpr: I }), questionDot: new L("?."), arrow: new L("=>", { beforeExpr: I }), template: new L("template"), ellipsis: new L("...", { beforeExpr: I }), backQuote: new L("`", { startsExpr: !0 }), dollarBraceL: new L("${", { beforeExpr: I, startsExpr: !0 }), at: new L("@"), hash: new L("#"), eq: new L("=", { beforeExpr: I, isAssign: !0 }), reassign: new L(":=", { beforeExpr: I, isAssign: !0 }), assign: new L("_=", { beforeExpr: I, isAssign: !0 }), incDec: new L("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }), bang: new L("!", { beforeExpr: I, prefix: !0, startsExpr: !0 }), tilde: new L("~", { beforeExpr: I, prefix: !0, startsExpr: !0 }), pipeline: new D("|>", 0), nullishCoalescing: new D("??", 1), logicalOR: new D("||", 1), logicalAND: new D("&&", 2), bitwiseOR: new D("|", 3), bitwiseXOR: new D("^", 4), bitwiseAND: new D("&", 5), equality: new D("==/!=", 6), relational: new D("</>", 7), bitShift: new D("<</>>", 8), plusMin: new L("+/-", { beforeExpr: I, binop: 9, prefix: !0, startsExpr: !0 }), modulo: new D("%", 10), star: new D("*", 10), slash: new D("/", 10), exponent: new L("**", { beforeExpr: I, binop: 11, rightAssociative: !0 }) },
			    _ = { break: new M("break"), case: new M("case", { beforeExpr: I }), catch: new M("catch"), continue: new M("continue"), debugger: new M("debugger"), default: new M("default", { beforeExpr: I }), do: new M("do", { isLoop: !0, beforeExpr: I }), else: new M("else", { beforeExpr: I }), finally: new M("finally"), for: new M("for", { isLoop: !0 }), function: new M("function", { startsExpr: !0 }), if: new M("if"), return: new M("return", { beforeExpr: I }), switch: new M("switch"), throw: new M("throw", { beforeExpr: I, prefix: !0, startsExpr: !0 }), try: new M("try"), var: new M("var"), let: new M("let"), const: new M("const"), while: new M("while", { isLoop: !0 }), with: new M("with"), new: new M("new", { beforeExpr: I, startsExpr: !0 }), this: new M("this", { startsExpr: !0 }), super: new M("super", { startsExpr: !0 }), class: new M("class"), extends: new M("extends", { beforeExpr: I }), export: new M("export"), import: new M("import", { startsExpr: !0 }), yield: new M("yield", { beforeExpr: I, startsExpr: !0 }), null: new M("null", { startsExpr: !0 }), true: new M("true", { startsExpr: !0 }), false: new M("false", { startsExpr: !0 }), in: new M("in", { beforeExpr: I, binop: 7 }), instanceof: new M("instanceof", { beforeExpr: I, binop: 7 }), typeof: new M("typeof", { beforeExpr: I, prefix: !0, startsExpr: !0 }), void: new M("void", { beforeExpr: I, prefix: !0, startsExpr: !0 }), delete: new M("delete", { beforeExpr: I, prefix: !0, startsExpr: !0 }) };Object.keys(_).forEach(function (t) {
				O["_" + t] = _[t];
			});var R = { 6: n("enum await"), strict: n("implements interface let package private protected public static yield"), strictBind: n("eval arguments") },
			    j = n("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this let const class extends export import yield super"),
			    F = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄮㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿪ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞮꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
			    B = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣔ-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఃా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱꤀-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
			    q = new RegExp("[" + F + "]"),
			    V = new RegExp("[" + F + B + "]");F = B = null;var U = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 26, 45, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 785, 52, 76, 44, 33, 24, 27, 35, 42, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 54, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 86, 25, 391, 63, 32, 0, 257, 0, 11, 39, 8, 0, 22, 0, 12, 39, 3, 3, 55, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 698, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 881, 68, 12, 0, 67, 12, 65, 1, 31, 6124, 20, 754, 9486, 286, 82, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 4149, 196, 60, 67, 1213, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541],
			    K = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 1306, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 52, 0, 13, 2, 49, 13, 10, 2, 4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 57, 0, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 87, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 423, 9, 280, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 19719, 9, 135, 4, 60, 6, 26, 9, 1016, 45, 17, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 2214, 6, 110, 6, 6, 9, 792487, 239],
			    W = /\r\n?|\n|\u2028|\u2029/,
			    G = new RegExp(W.source, "g"),
			    X = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
			    J = function J(t, e, s, i) {
				this.token = t, this.isExpr = !!e, this.preserveSpace = !!s, this.override = i;
			},
			    H = { braceStatement: new J("{", !1), braceExpression: new J("{", !0), templateQuasi: new J("${", !0), parenStatement: new J("(", !1), parenExpression: new J("(", !0), template: new J("`", !0, !0, function (t) {
					return t.readTmplToken();
				}), functionExpression: new J("function", !0) };O.parenR.updateContext = O.braceR.updateContext = function () {
				if (1 !== this.state.context.length) {
					var t = this.state.context.pop();t === H.braceStatement && this.curContext() === H.functionExpression ? (this.state.context.pop(), this.state.exprAllowed = !1) : t === H.templateQuasi ? this.state.exprAllowed = !0 : this.state.exprAllowed = !t.isExpr;
				} else this.state.exprAllowed = !0;
			}, O.name.updateContext = function (t) {
				"of" !== this.state.value || this.curContext() !== H.parenStatement ? (this.state.exprAllowed = !1, t !== O._let && t !== O._const && t !== O._var || W.test(this.input.slice(this.state.end)) && (this.state.exprAllowed = !0), this.state.isIterator && (this.state.isIterator = !1)) : this.state.exprAllowed = !t.beforeExpr;
			}, O.braceL.updateContext = function (t) {
				this.state.context.push(this.braceIsBlock(t) ? H.braceStatement : H.braceExpression), this.state.exprAllowed = !0;
			}, O.dollarBraceL.updateContext = function () {
				this.state.context.push(H.templateQuasi), this.state.exprAllowed = !0;
			}, O.parenL.updateContext = function (t) {
				var e = t === O._if || t === O._for || t === O._with || t === O._while;this.state.context.push(e ? H.parenStatement : H.parenExpression), this.state.exprAllowed = !0;
			}, O.incDec.updateContext = function () {}, O._function.updateContext = function (t) {
				this.state.exprAllowed && !this.braceIsBlock(t) && this.state.context.push(H.functionExpression), this.state.exprAllowed = !1;
			}, O.backQuote.updateContext = function () {
				this.curContext() === H.template ? this.state.context.pop() : this.state.context.push(H.template), this.state.exprAllowed = !1;
			};var z = function z(t, e) {
				this.line = t, this.column = e;
			},
			    Q = function Q(t, e) {
				this.start = t, this.end = e;
			},
			    Y = function (t) {
				function e() {
					return t.apply(this, arguments) || this;
				}return r(e, t), e.prototype.raise = function (t, e, s) {
					var i = u(this.input, t);e += " (" + i.line + ":" + i.column + ")";var r = new SyntaxError(e);throw r.pos = t, r.loc = i, s && (r.missingPlugin = s), r;
				}, e;
			}(function (t) {
				function e() {
					return t.apply(this, arguments) || this;
				}r(e, t);var s = e.prototype;return s.addComment = function (t) {
					this.filename && (t.loc.filename = this.filename), this.state.trailingComments.push(t), this.state.leadingComments.push(t);
				}, s.processComment = function (t) {
					if (!("Program" === t.type && t.body.length > 0)) {
						var e,
						    s,
						    i,
						    r,
						    a,
						    n = this.state.commentStack;if (this.state.trailingComments.length > 0) this.state.trailingComments[0].start >= t.end ? (i = this.state.trailingComments, this.state.trailingComments = []) : this.state.trailingComments.length = 0;else if (n.length > 0) {
							var o = d(n);o.trailingComments && o.trailingComments[0].start >= t.end && (i = o.trailingComments, delete o.trailingComments);
						}for (n.length > 0 && d(n).start >= t.start && (e = n.pop()); n.length > 0 && d(n).start >= t.start;) {
							s = n.pop();
						}if (!s && e && (s = e), e && this.state.leadingComments.length > 0) {
							var h = d(this.state.leadingComments);if ("ObjectProperty" === e.type) {
								if (h.start >= t.start && this.state.commentPreviousNode) {
									for (a = 0; a < this.state.leadingComments.length; a++) {
										this.state.leadingComments[a].end < this.state.commentPreviousNode.end && (this.state.leadingComments.splice(a, 1), a--);
									}this.state.leadingComments.length > 0 && (e.trailingComments = this.state.leadingComments, this.state.leadingComments = []);
								}
							} else if ("CallExpression" === t.type && t.arguments && t.arguments.length) {
								var p = d(t.arguments);p && h.start >= p.start && h.end <= t.end && this.state.commentPreviousNode && this.state.leadingComments.length > 0 && (p.trailingComments = this.state.leadingComments, this.state.leadingComments = []);
							}
						}if (s) {
							if (s.leadingComments) if (s !== t && s.leadingComments.length > 0 && d(s.leadingComments).end <= t.start) t.leadingComments = s.leadingComments, delete s.leadingComments;else for (r = s.leadingComments.length - 2; r >= 0; --r) {
								if (s.leadingComments[r].end <= t.start) {
									t.leadingComments = s.leadingComments.splice(0, r + 1);break;
								}
							}
						} else if (this.state.leadingComments.length > 0) if (d(this.state.leadingComments).end <= t.start) {
							if (this.state.commentPreviousNode) for (a = 0; a < this.state.leadingComments.length; a++) {
								this.state.leadingComments[a].end < this.state.commentPreviousNode.end && (this.state.leadingComments.splice(a, 1), a--);
							}this.state.leadingComments.length > 0 && (t.leadingComments = this.state.leadingComments, this.state.leadingComments = []);
						} else {
							for (r = 0; r < this.state.leadingComments.length && !(this.state.leadingComments[r].end > t.start); r++) {}var c = this.state.leadingComments.slice(0, r);c.length && (t.leadingComments = c), 0 === (i = this.state.leadingComments.slice(r)).length && (i = null);
						}this.state.commentPreviousNode = t, i && (i.length && i[0].start >= t.start && d(i).end <= t.end ? t.innerComments = i : t.trailingComments = i), n.push(t);
					}
				}, e;
			}(function () {
				function t() {}var e = t.prototype;return e.isReservedWord = function (t) {
					return "await" === t ? this.inModule : R[6](t);
				}, e.hasPlugin = function (t) {
					return !!this.plugins[t];
				}, t;
			}())),
			    $ = function () {
				function t() {}var e = t.prototype;return e.init = function (t, e) {
					this.strict = !1 !== t.strictMode && "module" === t.sourceType, this.input = e, this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.inMethod = this.inFunction = this.inParameters = this.maybeInArrowParameters = this.inGenerator = this.inAsync = this.inPropertyName = this.inType = this.inClassProperty = this.noAnonFunctionType = !1, this.classLevel = 0, this.labels = [], this.decoratorStack = [[]], this.yieldInPossibleArrowParameters = null, this.tokens = [], this.comments = [], this.trailingComments = [], this.leadingComments = [], this.commentStack = [], this.commentPreviousNode = null, this.pos = this.lineStart = this.lastIndent = 0, this.insideIndent = !0, this.curLine = t.startLine, this.indent = null, this.type = O.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = [H.braceStatement], this.exprAllowed = !0, this.containsEsc = this.containsOctal = !1, this.octalPosition = null, this.invalidTemplateEscapePosition = null, this.exportedIdentifiers = [];
				}, e.curPosition = function () {
					return new z(this.curLine, this.pos - this.lineStart);
				}, e.clone = function (e) {
					var s = this,
					    i = new t();return Object.keys(this).forEach(function (t) {
						var r = s[t];e && "context" !== t || !Array.isArray(r) || (r = r.slice()), i[t] = r;
					}), i;
				}, t;
			}(),
			    Z = function Z(t) {
				return t >= 48 && t <= 57;
			},
			    tt = { decBinOct: [46, 66, 69, 79, 95, 98, 101, 111], hex: [46, 88, 95, 120] },
			    et = {};et.bin = [48, 49], et.oct = et.bin.concat([50, 51, 52, 53, 54, 55]), et.dec = et.oct.concat([56, 57]), et.hex = et.dec.concat([65, 66, 67, 68, 69, 70, 97, 98, 99, 100, 101, 102]);var st = function st(t) {
				this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, this.loc = new Q(t.startLoc, t.endLoc);
			},
			    it = function (t) {
				function e() {
					return t.apply(this, arguments) || this;
				}r(e, t);var s = e.prototype;return s.addExtra = function (t, e, s) {
					t && ((t.extra = t.extra || {})[e] = s);
				}, s.isRelational = function (t) {
					return this.match(O.relational) && this.state.value === t;
				}, s.expectRelational = function (t) {
					this.isRelational(t) ? this.next() : this.unexpected(null, O.relational);
				}, s.eatRelational = function (t) {
					return !!this.isRelational(t) && (this.next(), !0);
				}, s.isContextual = function (t) {
					return this.match(O.name) && this.state.value === t;
				}, s.isLookaheadContextual = function (t) {
					var e = this.lookahead();return e.type === O.name && e.value === t;
				}, s.eatContextual = function (t) {
					return this.state.value === t && this.eat(O.name);
				}, s.expectContextual = function (t, e) {
					this.eatContextual(t) || this.unexpected(null, e);
				}, s.canInsertSemicolon = function () {
					return this.match(O.eof) || this.match(O.braceR) || this.hasPrecedingLineBreak();
				}, s.hasPrecedingLineBreak = function () {
					return W.test(this.input.slice(this.state.lastTokEnd, this.state.start));
				}, s.isLineTerminator = function () {
					return this.eat(O.semi) || this.canInsertSemicolon();
				}, s.semicolon = function () {
					this.isLineTerminator() || this.unexpected(null, O.semi);
				}, s.expect = function (t, e) {
					this.eat(t) || this.unexpected(e, t);
				}, s.expectLenient = function (t, e) {
					return this.hasPlugin("lenient") && !this.match(t) ? (this.insertFakeToken(t), !0) : (this.eat(t) || this.unexpected(e, t), !1);
				}, s.expectBraceOrIndent = function () {
					this.match(O.braceL) ? this.eat(O.braceL) : this.matchIndent() || this.unexpected(null, O.braceL);
				}, s.unexpected = function (t, e) {
					throw void 0 === e && (e = "Unexpected token"), "string" != typeof e && (e = 'Unexpected token, expected "' + e.label + '"'), this.raise(null != t ? t : this.state.start, e);
				}, s.expectPlugin = function (t, e) {
					if (!this.hasPlugin(t)) throw this.raise(null != e ? e : this.state.start, "This experimental syntax requires enabling the parser plugin: '" + t + "'", [t]);return !0;
				}, s.expectOnePlugin = function (t, e) {
					var s = this;if (!t.some(function (t) {
						return s.hasPlugin(t);
					})) throw this.raise(null != e ? e : this.state.start, "This experimental syntax requires enabling one of the following parser plugin(s): '" + t.join(", ") + "'", t);
				}, e;
			}(function (t) {
				function e(e, s) {
					var i;return i = t.call(this) || this, i.state = new $(), i.state.init(e, s), i.isLookahead = !1, i;
				}r(e, t);var s = e.prototype;return s.next = function () {
					this.options.tokens && !this.isLookahead && this.state.tokens.push(new st(this.state)), this.state.lastTokEnd = this.state.end, this.state.lastTokStart = this.state.start, this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.state.lastTokType = this.state.type, this.nextToken();
				}, s.eat = function (t) {
					return !!this.match(t) && (this.next(), !0);
				}, s.match = function (t) {
					return this.state.type === t;
				}, s.matchIndent = function () {
					return this.hasPlugin("lenient") && this.isRightAfterIndent() && (this.state.indent || 0) > this.state.lastIndent;
				}, s.matchNoIndent = function () {
					return this.hasPlugin("lenient") && this.isRightAfterIndent() && (this.state.indent || 0) <= this.state.lastIndent;
				}, s.matchDedent = function (t, e) {
					return void 0 === e && (e = O.braceR), !(!this.hasPlugin("lenient") || !(this.isRightAfterIndent() && (this.state.indent || 0) < t.extra.indent || this.match(O.parenR) || this.match(O.bracketR) || this.match(O.eof))) && (this.eat(e), !0);
				}, s.isRightAfterIndent = function () {
					return this.state.start === this.state.lineStart + (this.state.indent || 0);
				}, s.isKeyword = function (t) {
					return j(t);
				}, s.lookahead = function () {
					var t = this.state;this.state = t.clone(!0), this.isLookahead = !0, this.next(), this.isLookahead = !1;var e = this.state;return this.state = t, e;
				}, s.setStrict = function (t) {
					if (this.state.strict = t, this.match(O.num) || this.match(O.string)) {
						for (this.state.pos = this.state.start; this.state.pos < this.state.lineStart;) {
							this.state.lineStart = this.input.lastIndexOf("\n", this.state.lineStart - 2) + 1, --this.state.curLine;
						}this.nextToken();
					}
				}, s.curContext = function () {
					return this.state.context[this.state.context.length - 1];
				}, s.nextToken = function () {
					var t = this.curContext();t && t.preserveSpace || this.skipSpace(), this.state.containsOctal = !1, this.state.octalPosition = null, this.state.start = this.state.pos, this.state.startLoc = this.state.curPosition(), this.state.insideIndent && (this.state.insideIndent = !1, this.state.indent = this.state.start - this.state.lineStart), this.state.pos >= this.input.length ? this.finishToken(O.eof) : t.override ? t.override(this) : this.readToken(this.fullCharCodeAtPos());
				}, s.readToken = function (t) {
					h(t) || 92 === t ? this.readWord() : this.getTokenFromCode(t);
				}, s.fullCharCodeAtPos = function () {
					var t = this.input.charCodeAt(this.state.pos);return t <= 55295 || t >= 57344 ? t : (t << 10) + this.input.charCodeAt(this.state.pos + 1) - 56613888;
				}, s.pushComment = function (t, e, s, i, r, a) {
					var n = { type: t ? "CommentBlock" : "CommentLine", value: e, start: s, end: i, loc: new Q(r, a) };this.isLookahead || (this.options.tokens && this.state.tokens.push(n), this.state.comments.push(n), this.addComment(n));
				}, s.skipBlockComment = function () {
					var t = this.state.curPosition(),
					    e = this.state.pos,
					    s = this.input.indexOf("*/", this.state.pos += 2);-1 === s && this.raise(this.state.pos - 2, "Unterminated comment"), this.state.pos = s + 2, G.lastIndex = e;for (var i; (i = G.exec(this.input)) && i.index < this.state.pos;) {
						++this.state.curLine, this.state.lineStart = i.index + i[0].length;
					}this.pushComment(!0, this.input.slice(e + 2, s), e, this.state.pos, t, this.state.curPosition());
				}, s.skipLineComment = function (t) {
					var e = this.state.pos,
					    s = this.state.curPosition(),
					    i = this.input.charCodeAt(this.state.pos += t);if (this.state.pos < this.input.length) for (; 10 !== i && 13 !== i && 8232 !== i && 8233 !== i && ++this.state.pos < this.input.length;) {
						i = this.input.charCodeAt(this.state.pos);
					}this.pushComment(!1, this.input.slice(e + t, this.state.pos), e, this.state.pos, s, this.state.curPosition());
				}, s.skipSpace = function () {
					t: for (; this.state.pos < this.input.length;) {
						var t = this.input.charCodeAt(this.state.pos);switch (t) {case 32:case 160:
								++this.state.pos;break;case 13:
								10 === this.input.charCodeAt(this.state.pos + 1) && ++this.state.pos;case 10:case 8232:case 8233:
								++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos, this.state.insideIndent = !0, this.state.lastIndent = this.state.indent || 0;break;case 47:
								switch (this.input.charCodeAt(this.state.pos + 1)) {case 42:
										this.skipBlockComment();break;case 47:
										this.skipLineComment(2);break;default:
										break t;}break;default:
								if (!(t > 8 && t < 14 || t >= 5760 && X.test(String.fromCharCode(t)))) break t;++this.state.pos;}
					}
				}, s.finishToken = function (t, e) {
					this.state.end = this.state.pos, this.state.endLoc = this.state.curPosition();var s = this.state.type;this.state.type = t, this.state.value = e, this.updateContext(s);
				}, s.insertFakeToken = function (t) {
					var e = { type: t, value: void 0, start: this.state.start, end: this.state.end, loc: new Q(this.state.startLoc, this.state.endLoc) };this.state.tokens.push(new st(e));
				}, s.readToken_dot = function () {
					var t = this.input.charCodeAt(this.state.pos + 1);if (t >= 48 && t <= 57) this.readNumber(!0);else {
						var e = this.input.charCodeAt(this.state.pos + 2);46 === t && 46 === e ? (this.state.pos += 3, this.finishToken(O.ellipsis)) : (++this.state.pos, this.finishToken(O.dot));
					}
				}, s.readToken_slash = function () {
					if (this.state.exprAllowed) return ++this.state.pos, void this.readRegexp();61 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(O.assign, 2) : this.finishOp(O.slash, 1);
				}, s.readToken_mult_modulo = function (t) {
					var e = 42 === t ? O.star : O.modulo,
					    s = 1,
					    i = this.input.charCodeAt(this.state.pos + 1),
					    r = this.state.exprAllowed;42 === t && 42 === i && (s++, i = this.input.charCodeAt(this.state.pos + 2), e = O.exponent), 61 !== i || r || (s++, e = O.assign), this.finishOp(e, s);
				}, s.readToken_pipe_amp = function (t) {
					var e = this.input.charCodeAt(this.state.pos + 1);if (e === t) {
						var s = 61 === this.input.charCodeAt(this.state.pos + 2);return s && this.expectPlugin("logicalAssignment"), void this.finishOp(s ? O.assign : 124 === t ? O.logicalOR : O.logicalAND, s ? 3 : 2);
					}if (124 === t) {
						if (62 === e) return void this.finishOp(O.pipeline, 2);if (125 === e && this.hasPlugin("flow")) return void this.finishOp(O.braceBarR, 2);
					}61 !== e ? this.finishOp(124 === t ? O.bitwiseOR : O.bitwiseAND, 1) : this.finishOp(O.assign, 2);
				}, s.readToken_caret = function () {
					61 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(O.assign, 2) : this.finishOp(O.bitwiseXOR, 1);
				}, s.readToken_plus_min = function (t) {
					var e = this.input.charCodeAt(this.state.pos + 1);if (e === t) return 45 === e && !this.inModule && 62 === this.input.charCodeAt(this.state.pos + 2) && W.test(this.input.slice(this.state.lastTokEnd, this.state.pos)) ? (this.skipLineComment(3), this.skipSpace(), void this.nextToken()) : void this.finishOp(O.incDec, 2);61 === e ? this.finishOp(O.assign, 2) : this.finishOp(O.plusMin, 1);
				}, s.readToken_lt_gt = function (t) {
					var e = this.input.charCodeAt(this.state.pos + 1),
					    s = 1;return e === t ? (s = 62 === t && 62 === this.input.charCodeAt(this.state.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.state.pos + s) ? void this.finishOp(O.assign, s + 1) : void this.finishOp(O.bitShift, s)) : 33 !== e || 60 !== t || this.inModule || 45 !== this.input.charCodeAt(this.state.pos + 2) || 45 !== this.input.charCodeAt(this.state.pos + 3) ? (61 === e && (s = 2), void this.finishOp(O.relational, s)) : (this.skipLineComment(4), this.skipSpace(), void this.nextToken());
				}, s.readToken_eq_excl = function (t) {
					var e = this.input.charCodeAt(this.state.pos + 1);if (61 !== e) return 61 === t && 62 === e ? (this.state.pos += 2, void this.finishToken(O.arrow)) : void this.finishOp(61 === t ? O.eq : O.bang, 1);this.finishOp(O.equality, 61 === this.input.charCodeAt(this.state.pos + 2) ? 3 : 2);
				}, s.readToken_question = function () {
					var t = this.input.charCodeAt(this.state.pos + 1),
					    e = this.input.charCodeAt(this.state.pos + 2);63 === t ? this.finishOp(O.nullishCoalescing, 2) : 46 !== t || e >= 48 && e <= 57 ? (++this.state.pos, this.finishToken(O.question)) : (this.state.pos += 2, this.finishToken(O.questionDot));
				}, s.getTokenFromCode = function (t) {
					switch (t) {case 35:
							if ((this.hasPlugin("classPrivateProperties") || this.hasPlugin("classPrivateMethods")) && this.state.classLevel > 0) return ++this.state.pos, void this.finishToken(O.hash);this.raise(this.state.pos, "Unexpected character '" + f(t) + "'");case 46:
							return void this.readToken_dot();case 40:
							return ++this.state.pos, void this.finishToken(O.parenL);case 41:
							return ++this.state.pos, void this.finishToken(O.parenR);case 59:
							return ++this.state.pos, void this.finishToken(O.semi);case 44:
							return ++this.state.pos, void this.finishToken(O.comma);case 91:
							return ++this.state.pos, void this.finishToken(O.bracketL);case 93:
							return ++this.state.pos, void this.finishToken(O.bracketR);case 123:
							return void (this.hasPlugin("flow") && 124 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(O.braceBarL, 2) : (++this.state.pos, this.finishToken(O.braceL)));case 125:
							return ++this.state.pos, void this.finishToken(O.braceR);case 58:
							return void (this.hasPlugin("functionBind") && 58 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(O.doubleColon, 2) : this.hasPlugin("lenient") && 61 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(O.reassign, 2) : (++this.state.pos, this.finishToken(O.colon)));case 63:
							return void this.readToken_question();case 64:
							return ++this.state.pos, void this.finishToken(O.at);case 96:
							return ++this.state.pos, void this.finishToken(O.backQuote);case 48:
							var e = this.input.charCodeAt(this.state.pos + 1);if (120 === e || 88 === e) return void this.readRadixNumber(16);if (111 === e || 79 === e) return void this.readRadixNumber(8);if (98 === e || 66 === e) return void this.readRadixNumber(2);case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
							return void this.readNumber(!1);case 34:case 39:
							return void this.readString(t);case 47:
							return void this.readToken_slash();case 37:case 42:
							return void this.readToken_mult_modulo(t);case 124:case 38:
							return void this.readToken_pipe_amp(t);case 94:
							return void this.readToken_caret();case 43:case 45:
							return void this.readToken_plus_min(t);case 60:case 62:
							return void this.readToken_lt_gt(t);case 61:case 33:
							return void this.readToken_eq_excl(t);case 126:
							return void this.finishOp(O.tilde, 1);}this.raise(this.state.pos, "Unexpected character '" + f(t) + "'");
				}, s.finishOp = function (t, e) {
					var s = this.input.slice(this.state.pos, this.state.pos + e);this.state.pos += e, this.finishToken(t, s);
				}, s.readRegexp = function () {
					for (var t, e, s = this.state.pos;;) {
						this.state.pos >= this.input.length && this.raise(s, "Unterminated regular expression");var i = this.input.charAt(this.state.pos);if (W.test(i) && this.raise(s, "Unterminated regular expression"), t) t = !1;else {
							if ("[" === i) e = !0;else if ("]" === i && e) e = !1;else if ("/" === i && !e) break;t = "\\" === i;
						}++this.state.pos;
					}var r = this.input.slice(s, this.state.pos);++this.state.pos;for (var a = /^[gmsiyu]$/, n = ""; this.state.pos < this.input.length;) {
						var o = this.input[this.state.pos],
						    h = this.fullCharCodeAtPos();if (a.test(o)) ++this.state.pos, n += o;else {
							if (!c(h) && 92 !== h) break;this.raise(this.state.pos, "Invalid regular expression flag");
						}
					}this.finishToken(O.regexp, { pattern: r, flags: n });
				}, s.readInt = function (t, e) {
					for (var s = this.state.pos, i = 16 === t ? tt.hex : tt.decBinOct, r = 16 === t ? et.hex : 10 === t ? et.dec : 8 === t ? et.oct : et.bin, a = 0, n = 0, o = null == e ? 1 / 0 : e; n < o; ++n) {
						var h = this.input.charCodeAt(this.state.pos),
						    p = void 0;if (this.hasPlugin("numericSeparator")) {
							var c = this.input.charCodeAt(this.state.pos - 1),
							    l = this.input.charCodeAt(this.state.pos + 1);if (95 === h) {
								-1 === r.indexOf(l) && this.raise(this.state.pos, "Invalid or unexpected token"), (i.indexOf(c) > -1 || i.indexOf(l) > -1 || Number.isNaN(l)) && this.raise(this.state.pos, "Invalid or unexpected token"), ++this.state.pos;continue;
							}
						}if ((p = h >= 97 ? h - 97 + 10 : h >= 65 ? h - 65 + 10 : Z(h) ? h - 48 : 1 / 0) >= t) break;++this.state.pos, a = a * t + p;
					}return this.state.pos === s || null != e && this.state.pos - s !== e ? null : a;
				}, s.readRadixNumber = function (t) {
					var e = this.state.pos,
					    s = !1;this.state.pos += 2;var i = this.readInt(t);if (null == i && this.raise(this.state.start + 2, "Expected number in radix " + t), this.hasPlugin("bigInt") && 110 === this.input.charCodeAt(this.state.pos) && (++this.state.pos, s = !0), h(this.fullCharCodeAtPos()) && this.raise(this.state.pos, "Identifier directly after number"), s) {
						var r = this.input.slice(e, this.state.pos).replace(/[_n]/g, "");this.finishToken(O.bigint, r);
					} else this.finishToken(O.num, i);
				}, s.readNumber = function (t) {
					var e = this.state.pos,
					    s = 48 === this.input.charCodeAt(e),
					    i = !1,
					    r = !1;t || null !== this.readInt(10) || this.raise(e, "Invalid number"), s && this.state.pos == e + 1 && (s = !1);var a = this.input.charCodeAt(this.state.pos);46 !== a || s || (++this.state.pos, this.readInt(10), i = !0, a = this.input.charCodeAt(this.state.pos)), 69 !== a && 101 !== a || s || (43 !== (a = this.input.charCodeAt(++this.state.pos)) && 45 !== a || ++this.state.pos, null === this.readInt(10) && this.raise(e, "Invalid number"), i = !0, a = this.input.charCodeAt(this.state.pos)), this.hasPlugin("bigInt") && 110 === a && ((i || s) && this.raise(e, "Invalid BigIntLiteral"), ++this.state.pos, r = !0), h(this.fullCharCodeAtPos()) && this.raise(this.state.pos, "Identifier directly after number");var n = this.input.slice(e, this.state.pos).replace(/[_n]/g, "");if (r) this.finishToken(O.bigint, n);else {
						var o;i ? o = parseFloat(n) : s && 1 !== n.length ? this.state.strict ? this.raise(e, "Invalid number") : o = /[89]/.test(n) ? parseInt(n, 10) : parseInt(n, 8) : o = parseInt(n, 10), this.finishToken(O.num, o);
					}
				}, s.readCodePoint = function (t) {
					var e;if (123 === this.input.charCodeAt(this.state.pos)) {
						var s = ++this.state.pos;if (e = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos, t), ++this.state.pos, null === e) --this.state.invalidTemplateEscapePosition;else if (e > 1114111) {
							if (!t) return this.state.invalidTemplateEscapePosition = s - 2, null;this.raise(s, "Code point out of bounds");
						}
					} else e = this.readHexChar(4, t);return e;
				}, s.readString = function (t) {
					for (var e = "", s = ++this.state.pos;;) {
						this.state.pos >= this.input.length && this.raise(this.state.start, "Unterminated string constant");var i = this.input.charCodeAt(this.state.pos);if (i === t) break;92 === i ? (e += this.input.slice(s, this.state.pos), e += this.readEscapedChar(!1), s = this.state.pos) : (l(i) && this.raise(this.state.start, "Unterminated string constant"), ++this.state.pos);
					}e += this.input.slice(s, this.state.pos++), this.finishToken(O.string, e);
				}, s.readTmplToken = function () {
					for (var t = "", e = this.state.pos, s = !1;;) {
						this.state.pos >= this.input.length && this.raise(this.state.start, "Unterminated template");var i = this.input.charCodeAt(this.state.pos);if (96 === i || 36 === i && 123 === this.input.charCodeAt(this.state.pos + 1)) return this.state.pos === this.state.start && this.match(O.template) ? 36 === i ? (this.state.pos += 2, void this.finishToken(O.dollarBraceL)) : (++this.state.pos, void this.finishToken(O.backQuote)) : (t += this.input.slice(e, this.state.pos), void this.finishToken(O.template, s ? null : t));if (92 === i) {
							t += this.input.slice(e, this.state.pos);var r = this.readEscapedChar(!0);null === r ? s = !0 : t += r, e = this.state.pos;
						} else if (l(i)) {
							switch (t += this.input.slice(e, this.state.pos), ++this.state.pos, i) {case 13:
									10 === this.input.charCodeAt(this.state.pos) && ++this.state.pos;case 10:
									t += "\n";break;default:
									t += String.fromCharCode(i);}++this.state.curLine, this.state.lineStart = this.state.pos, e = this.state.pos;
						} else ++this.state.pos;
					}
				}, s.readEscapedChar = function (t) {
					var e = !t,
					    s = this.input.charCodeAt(++this.state.pos);switch (++this.state.pos, s) {case 110:
							return "\n";case 114:
							return "\r";case 120:
							var i = this.readHexChar(2, e);return null === i ? null : String.fromCharCode(i);case 117:
							var r = this.readCodePoint(e);return null === r ? null : f(r);case 116:
							return "\t";case 98:
							return "\b";case 118:
							return "\v";case 102:
							return "\f";case 13:
							10 === this.input.charCodeAt(this.state.pos) && ++this.state.pos;case 10:
							return this.state.lineStart = this.state.pos, ++this.state.curLine, "";default:
							if (s >= 48 && s <= 55) {
								var a = this.state.pos - 1,
								    n = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/)[0],
								    o = parseInt(n, 8);if (o > 255 && (n = n.slice(0, -1), o = parseInt(n, 8)), o > 0) {
									if (t) return this.state.invalidTemplateEscapePosition = a, null;this.state.strict ? this.raise(a, "Octal literal in strict mode") : this.state.containsOctal || (this.state.containsOctal = !0, this.state.octalPosition = a);
								}return this.state.pos += n.length - 1, String.fromCharCode(o);
							}return String.fromCharCode(s);}
				}, s.readHexChar = function (t, e) {
					var s = this.state.pos,
					    i = this.readInt(16, t);return null === i && (e ? this.raise(s, "Bad character escape sequence") : (this.state.pos = s - 1, this.state.invalidTemplateEscapePosition = s - 1)), i;
				}, s.readWord1 = function () {
					this.state.containsEsc = !1;for (var t = "", e = !0, s = this.state.pos; this.state.pos < this.input.length;) {
						var i = this.fullCharCodeAtPos();if (c(i)) this.state.pos += i <= 65535 ? 1 : 2;else if (this.state.isIterator && 64 === i) this.state.pos += 1;else {
							if (92 !== i) break;this.state.containsEsc = !0, t += this.input.slice(s, this.state.pos);var r = this.state.pos;117 !== this.input.charCodeAt(++this.state.pos) && this.raise(this.state.pos, 'Expecting Unicode escape sequence \\uXXXX'), ++this.state.pos;var a = this.readCodePoint(!0);(e ? h : c)(a, !0) || this.raise(r, "Invalid Unicode escape"), t += f(a), s = this.state.pos;
						}e = !1;
					}return t + this.input.slice(s, this.state.pos);
				}, s.isIterator = function (t) {
					return "@@iterator" === t || "@@asyncIterator" === t;
				}, s.readWord = function () {
					var t = this.readWord1(),
					    e = O.name;this.isKeyword(t) && (this.state.containsEsc && this.raise(this.state.pos, "Escape sequence in keyword " + t), e = _[t]), !this.state.isIterator || this.isIterator(t) && this.state.inType || this.raise(this.state.pos, "Invalid identifier " + t), this.finishToken(e, t);
				}, s.braceIsBlock = function (t) {
					if (t === O.colon) {
						var e = this.curContext();if (e === H.braceStatement || e === H.braceExpression) return !e.isExpr;
					}return t === O._return ? W.test(this.input.slice(this.state.lastTokEnd, this.state.start)) : t === O._else || t === O.semi || t === O.eof || t === O.parenR || (t === O.braceL ? this.curContext() === H.braceStatement : t === O.relational || !this.state.exprAllowed);
				}, s.updateContext = function (t) {
					var e,
					    s = this.state.type;!s.keyword || t !== O.dot && t !== O.questionDot ? (e = s.updateContext) ? e.call(this, t) : this.state.exprAllowed = s.beforeExpr : this.state.exprAllowed = !1;
				}, e;
			}(Y)),
			    rt = ["leadingComments", "trailingComments", "innerComments"],
			    at = function () {
				function t(t, e, s) {
					this.type = "", this.start = e, this.end = 0, this.loc = new Q(s), t && t.options.ranges && (this.range = [e, 0]), t && t.filename && (this.loc.filename = t.filename);
				}return t.prototype.__clone = function () {
					var e = this,
					    s = new t();return Object.keys(this).forEach(function (t) {
						rt.indexOf(t) < 0 && (s[t] = e[t]);
					}), s;
				}, t;
			}(),
			    nt = [],
			    ot = { kind: "loop" },
			    ht = { kind: "switch" },
			    pt = {},
			    ct = function (t) {
				function e(e, s) {
					var i;return e = a(e), i = t.call(this, e, s) || this, i.options = e, i.inModule = "module" === i.options.sourceType, i.input = s, i.plugins = m(i.options.plugins), i.filename = e.sourceFilename, 0 === i.state.pos && "#" === i.input[0] && "!" === i.input[1] && i.skipLineComment(2), i;
				}return r(e, t), e.prototype.parse = function () {
					var t = this.startNode(),
					    e = this.startNode();return this.nextToken(), this.parseTopLevel(t, e);
				}, e;
			}(function (t) {
				function e() {
					return t.apply(this, arguments) || this;
				}r(e, t);var s = e.prototype;return s.parseTopLevel = function (t, e) {
					return e.sourceType = this.options.sourceType, this.parseBlockBody(e, !0, !0, O.eof), t.program = this.finishNode(e, "Program"), t.comments = this.state.comments, this.options.tokens && (t.tokens = this.state.tokens), this.finishNode(t, "File");
				}, s.stmtToDirective = function (t) {
					var e = t.expression,
					    s = this.startNodeAt(e.start, e.loc.start),
					    i = this.startNodeAt(t.start, t.loc.start),
					    r = this.input.slice(e.start, e.end),
					    a = s.value = r.slice(1, -1);return this.addExtra(s, "raw", r), this.addExtra(s, "rawValue", a), i.value = this.finishNodeAt(s, "DirectiveLiteral", e.end, e.loc.end), this.finishNodeAt(i, "Directive", t.end, t.loc.end);
				}, s.parseStatement = function (t, e, s) {
					return this.match(O.at) && this.parseDecorators(!0), this.parseStatementContent(t, e, s);
				}, s.parseStatementContent = function (t, e, s) {
					var i = this.state.type,
					    r = this.startNode();if (e && this.matchIndent()) return this.parseBlock();switch (i) {case O._break:case O._continue:
							return this.parseBreakContinueStatement(r, i.keyword);case O._debugger:
							return this.parseDebuggerStatement(r);case O._do:
							return this.parseDoStatement(r);case O._for:
							return this.parseForStatement(r);case O._function:
							if (this.lookahead().type === O.dot) break;return t || this.unexpected(), this.parseFunctionStatement(r);case O._class:
							return t || this.unexpected(), this.parseClass(r, !0);case O._if:
							return this.parseIfStatement(r);case O._return:
							return this.parseReturnStatement(r);case O._switch:
							return this.parseSwitchStatement(r);case O._throw:
							return this.parseThrowStatement(r);case O._try:
							return this.parseTryStatement(r);case O._let:case O._const:
							t || this.unexpected();case O._var:
							return this.parseVarStatement(r, i);case O._while:
							return this.parseWhileStatement(r);case O._with:
							return this.parseWithStatement(r);case O.braceL:
							return this.parseBlock();case O.semi:
							return this.parseEmptyStatement(r);case O._export:case O._import:
							var a = this.lookahead();if (a.type === O.parenL || a.type === O.dot) break;this.options.allowImportExportEverywhere || s || this.raise(this.state.start, "'import' and 'export' may only appear at the top level"), this.next();var n;return n = i == O._import ? this.parseImport(r) : this.parseExport(r), this.assertModuleNodeAllowed(r), n;case O.name:
							if ("async" === this.state.value) {
								var o = this.state.clone();if (this.next(), this.match(O._function) && !this.canInsertSemicolon()) return this.expect(O._function), this.parseFunction(r, !0, !1, !0);this.state = o;
							} else if (this.hasPlugin("lenient")) {
								var h = this.state.clone();if (this.next(), this.match(O.eq) || this.eat(O.colon) && !this.matchNoIndent()) return t || this.unexpected(), this.state = h, this.parseVarStatement(r, O._const, !1);this.state = h;
							}}var p = this.state.value,
					    c = this.parseExpression();return i === O.name && "Identifier" === c.type && this.eat(O.colon) ? this.parseLabeledStatement(r, p, c) : this.parseExpressionStatement(r, c);
				}, s.assertModuleNodeAllowed = function (t) {
					this.options.allowImportExportEverywhere || this.inModule || this.raise(t.start, "'import' and 'export' may appear only with 'sourceType: \"module\"'");
				}, s.takeDecorators = function (t) {
					var e = this.state.decoratorStack[this.state.decoratorStack.length - 1];e.length && (t.decorators = e, this.resetStartLocationFromNode(t, e[0]), this.state.decoratorStack[this.state.decoratorStack.length - 1] = []);
				}, s.parseDecorators = function (t) {
					this.hasPlugin("decorators2") && (t = !1);for (var e = this.state.decoratorStack[this.state.decoratorStack.length - 1]; this.match(O.at);) {
						var s = this.parseDecorator();e.push(s);
					}if (this.match(O._export)) {
						if (t) return;this.raise(this.state.start, "Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead");
					}this.match(O._class) || this.raise(this.state.start, "Leading decorators must be attached to a class declaration");
				}, s.parseDecorator = function () {
					this.expectOnePlugin(["decorators", "decorators2"]);var t = this.startNode();if (this.next(), this.hasPlugin("decorators2")) {
						for (var e = this.state.start, s = this.state.startLoc, i = this.parseIdentifier(!1); this.eat(O.dot);) {
							var r = this.startNodeAt(e, s);r.object = i, r.property = this.parseIdentifier(!0), r.computed = !1, i = this.finishNode(r, "MemberExpression");
						}if (this.eat(O.parenL)) {
							var a = this.startNodeAt(e, s);a.callee = i, this.state.decoratorStack.push([]), a.arguments = this.parseCallExpressionArguments(O.parenR, !1), this.state.decoratorStack.pop(), i = this.finishNode(a, "CallExpression"), this.toReferencedList(i.arguments);
						}t.expression = i;
					} else t.expression = this.parseMaybeAssign();return this.finishNode(t, "Decorator");
				}, s.parseBreakContinueStatement = function (t, e) {
					var s = "break" === e;this.next(), this.isLineTerminator() ? t.label = null : this.match(O.name) ? (t.label = this.parseIdentifier(), this.semicolon()) : this.unexpected();var i;for (i = 0; i < this.state.labels.length; ++i) {
						var r = this.state.labels[i];if (null == t.label || r.name === t.label.name) {
							if (null != r.kind && (s || "loop" === r.kind)) break;if (t.label && s) break;
						}
					}return i === this.state.labels.length && this.raise(t.start, "Unsyntactic " + e), this.finishNode(t, s ? "BreakStatement" : "ContinueStatement");
				}, s.parseDebuggerStatement = function (t) {
					return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
				}, s.parseDoStatement = function (t) {
					return this.next(), this.state.labels.push(ot), t.body = this.parseStatement(!1, !0), this.state.labels.pop(), this.expect(O._while), t.test = this.parseParenExpression(), this.eat(O.semi), this.finishNode(t, "DoWhileStatement");
				}, s.parseForStatement = function (t) {
					this.next(), this.state.labels.push(ot);var e = !1;if (this.state.inAsync && this.isContextual("await") && (this.expectPlugin("asyncGenerators"), e = !0, this.next()), this.expectLenient(O.parenL), this.match(O.semi)) return e && this.unexpected(), this.parseFor(t, null);var s = this.hasPlugin("lenient") && this.match(O.name);if (this.match(O._var) || this.match(O._let) || this.match(O._const) || s) {
						var i = this.startNode(),
						    r = s ? O._const : this.state.type;return s || this.next(), this.parseVar(i, !0, r), this.finishNode(i, "VariableDeclaration"), !this.match(O._in) && !this.isContextual("of") || 1 !== i.declarations.length || i.declarations[0].init ? (e && this.unexpected(), this.parseFor(t, i)) : this.parseForIn(t, i, e);
					}var a = { start: 0 },
					    n = this.parseExpression(!0, a);if (this.match(O._in) || this.isContextual("of")) {
						var o = this.isContextual("of") ? "for-of statement" : "for-in statement";return this.toAssignable(n, void 0, o), this.checkLVal(n, void 0, void 0, o), this.parseForIn(t, n, e);
					}return a.start && this.unexpected(a.start), e && this.unexpected(), this.parseFor(t, n);
				}, s.parseFunctionStatement = function (t) {
					return this.next(), this.parseFunction(t, !0);
				}, s.parseIfStatement = function (t) {
					return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement(!1, !0), t.alternate = this.eat(O._else) ? this.parseStatement(!1, !0) : null, this.finishNode(t, "IfStatement");
				}, s.parseReturnStatement = function (t) {
					return this.state.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.state.start, "'return' outside of function"), this.next(), this.isLineTerminator() && !this.matchIndent() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
				}, s.parseSwitchStatement = function (t) {
					this.next(), t.discriminant = this.parseParenExpression();var e = t.cases = [];this.expectBraceOrIndent(), this.state.labels.push(ht);for (var s, i; !this.match(O.braceR);) {
						if (this.match(O._case) || this.match(O._default)) {
							var r = this.match(O._case);s && this.finishNode(s, "SwitchCase"), e.push(s = this.startNode()), s.consequent = [], this.next(), r ? s.test = this.parseExpression() : (i && this.raise(this.state.lastTokStart, "Multiple default clauses"), i = !0, s.test = null), this.expectLenient(O.colon);
						} else s ? s.consequent.push(this.parseStatement(!0, !0)) : this.unexpected();if (s && this.matchDedent(s)) break;
					}return s && this.finishNode(s, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(t, "SwitchStatement");
				}, s.parseThrowStatement = function (t) {
					return this.next(), W.test(this.input.slice(this.state.lastTokEnd, this.state.start)) && this.raise(this.state.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
				}, s.parseTryStatement = function (t) {
					if (this.next(), t.block = this.parseBlock(), t.handler = null, this.match(O._catch)) {
						var e = this.startNode();if (this.next(), this.match(O.parenL)) {
							this.expectLenient(O.parenL), e.param = this.parseBindingAtom();var s = Object.create(null);this.checkLVal(e.param, !0, s, "catch clause"), this.expectLenient(O.parenR);
						} else this.expectPlugin("optionalCatchBinding"), e.param = null;e.body = this.parseBlock(), t.handler = this.finishNode(e, "CatchClause");
					}return t.guardedHandlers = nt, t.finalizer = this.eat(O._finally) ? this.parseBlock() : null, t.handler || t.finalizer || this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement");
				}, s.parseVarStatement = function (t, e, s) {
					return void 0 === s && (s = !0), s && this.next(), this.parseVar(t, !1, e), this.semicolon(), this.finishNode(t, "VariableDeclaration");
				}, s.parseWhileStatement = function (t) {
					return this.next(), t.test = this.parseParenExpression(), this.state.labels.push(ot), t.body = this.parseStatement(!1, !0), this.state.labels.pop(), this.finishNode(t, "WhileStatement");
				}, s.parseWithStatement = function (t) {
					return this.state.strict && this.raise(this.state.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement(!1, !0), this.finishNode(t, "WithStatement");
				}, s.parseEmptyStatement = function (t) {
					return this.next(), this.finishNode(t, "EmptyStatement");
				}, s.parseLabeledStatement = function (t, e, s) {
					for (var i = 0, r = this.state.labels; i < r.length; i++) {
						r[i].name === e && this.raise(s.start, "Label '" + e + "' is already declared");
					}for (var a = this.state.type.isLoop ? "loop" : this.match(O._switch) ? "switch" : null, n = this.state.labels.length - 1; n >= 0; n--) {
						var o = this.state.labels[n];if (o.statementStart !== t.start) break;o.statementStart = this.state.start, o.kind = a;
					}return this.state.labels.push({ name: e, kind: a, statementStart: this.state.start }), t.body = this.parseStatement(!0, !0), ("ClassDeclaration" == t.body.type || "VariableDeclaration" == t.body.type && "var" !== t.body.kind || "FunctionDeclaration" == t.body.type && (this.state.strict || t.body.generator || t.body.async)) && this.raise(t.body.start, "Invalid labeled declaration"), this.state.labels.pop(), t.label = s, this.finishNode(t, "LabeledStatement");
				}, s.parseExpressionStatement = function (t, e) {
					return t.expression = e, this.hasPlugin("lenient") ? this.eat(O.semi) : this.semicolon(), this.finishNode(t, "ExpressionStatement");
				}, s.parseBlock = function (t) {
					var e = this.startNode(),
					    s = this.expectLenient(O.braceL) ? O.dedent : O.braceR;return this.parseBlockBody(e, t, !1, s), this.finishNode(e, "BlockStatement");
				}, s.isValidDirective = function (t) {
					return "ExpressionStatement" === t.type && "StringLiteral" === t.expression.type && !t.expression.extra.parenthesized;
				}, s.parseBlockBody = function (t, e, s, i) {
					var r = t.body = [],
					    a = t.directives = [];this.parseBlockOrModuleBlockBody(r, e ? a : void 0, s, i);
				}, s.parseBlockOrModuleBlockBody = function (t, e, s, i) {
					for (var r, a, n = !1; i === O.dedent || !this.eat(i);) {
						n || !this.state.containsOctal || a || (a = this.state.octalPosition);var o = this.parseStatement(!0, !1, s);if (e && !n && this.isValidDirective(o)) {
							var h = this.stmtToDirective(o);e.push(h), void 0 === r && "use strict" === h.value.value && (r = this.state.strict, this.setStrict(!0), a && this.raise(a, "Octal literal in strict mode"));
						} else if (n = !0, t.push(o), i === O.dedent && this.matchDedent(o, i)) break;
					}!1 === r && this.setStrict(!1);
				}, s.parseFor = function (t, e) {
					return t.init = e, this.expect(O.semi), t.test = this.match(O.semi) ? null : this.parseExpression(), this.expect(O.semi), t.update = this.match(O.parenR) ? null : this.parseExpression(), this.expectLenient(O.parenR), t.body = this.parseStatement(!1, !0), this.state.labels.pop(), this.finishNode(t, "ForStatement");
				}, s.parseForIn = function (t, e, s) {
					var i = this.match(O._in) ? "ForInStatement" : "ForOfStatement";return s ? this.eatContextual("of") : this.next(), "ForOfStatement" === i && (t.await = !!s), t.left = e, t.right = this.parseExpression(), this.expectLenient(O.parenR), t.body = this.parseStatement(!1, !0), this.state.labels.pop(), this.finishNode(t, i);
				}, s.parseVar = function (t, e, s) {
					var i = t.declarations = [];for (t.kind = s.keyword;;) {
						var r = this.startNode();if (this.parseVarHead(r), this.eat(O.eq) ? r.init = this.parseMaybeAssign(e) : (s !== O._const || this.match(O._in) || this.isContextual("of") ? "Identifier" === r.id.type || e && (this.match(O._in) || this.isContextual("of")) || this.raise(this.state.lastTokEnd, "Complex binding patterns require an initialization value") : this.hasPlugin("typescript") || this.unexpected(), r.init = null), i.push(this.finishNode(r, "VariableDeclarator")), !this.eat(O.comma)) break;
					}return t;
				}, s.parseVarHead = function (t) {
					t.id = this.parseBindingAtom(), this.checkLVal(t.id, !0, void 0, "variable declaration");
				}, s.parseFunction = function (t, e, s, i, r) {
					var a = this.state.inFunction,
					    n = this.state.inMethod,
					    o = this.state.inGenerator;return this.state.inFunction = !0, this.state.inMethod = !1, this.initFunction(t, i), this.match(O.star) && (t.async && this.expectPlugin("asyncGenerators"), t.generator = !0, this.next()), !e || r || this.match(O.name) || this.match(O._yield) || this.unexpected(), e || (this.state.inGenerator = t.generator), (this.match(O.name) || this.match(O._yield)) && (t.id = this.parseBindingIdentifier()), e && (this.state.inGenerator = t.generator), this.parseFunctionParams(t), this.parseFunctionBodyAndFinish(t, e ? "FunctionDeclaration" : "FunctionExpression", s), this.state.inFunction = a, this.state.inMethod = n, this.state.inGenerator = o, t;
				}, s.parseFunctionParams = function (t, e) {
					var s = this.state.inParameters;this.state.inParameters = !0, this.expect(O.parenL), t.params = this.parseBindingList(O.parenR, !1, e), this.state.inParameters = s;
				}, s.parseClass = function (t, e, s) {
					return this.next(), this.takeDecorators(t), this.parseClassId(t, e, s), this.parseClassSuper(t), this.parseClassBody(t), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression");
				}, s.isClassProperty = function () {
					return this.match(O.eq) || this.match(O.semi) || this.match(O.braceR);
				}, s.isClassMethod = function () {
					return this.match(O.parenL);
				}, s.isNonstaticConstructor = function (t) {
					return !(t.computed || t.static || "constructor" !== t.key.name && "constructor" !== t.key.value);
				}, s.parseClassBody = function (t) {
					var e = this.state.strict;this.state.strict = !0, this.state.classLevel++;var s = { hadConstructor: !1 },
					    i = [],
					    r = this.startNode();for (r.body = [], this.expectBraceOrIndent(); !this.eat(O.braceR);) {
						if (this.eat(O.semi)) i.length > 0 && this.raise(this.state.lastTokEnd, "Decorators must not be followed by a semicolon");else if (this.match(O.at)) i.push(this.parseDecorator());else {
							var a = this.startNode();if (i.length && (a.decorators = i, this.resetStartLocationFromNode(a, i[0]), i = []), this.parseClassMember(r, a, s), this.hasPlugin("decorators2") && -1 === ["method", "get", "set"].indexOf(a.kind) && a.decorators && a.decorators.length > 0 && this.raise(a.start, "Stage 2 decorators may only be used with a class or a class method"), this.matchDedent(a)) break;
						}
					}i.length && this.raise(this.state.start, "You have trailing decorators with no method"), t.body = this.finishNode(r, "ClassBody"), this.state.classLevel--, this.state.strict = e;
				}, s.parseClassMember = function (t, e, s) {
					var i = !1;if (this.match(O.name) && "static" === this.state.value) {
						var r = this.parseIdentifier(!0);if (this.isClassMethod()) {
							var a = e;return a.kind = "method", a.computed = !1, a.key = r, a.static = !1, void this.pushClassMethod(t, a, !1, !1, !1);
						}if (this.isClassProperty()) {
							var n = e;return n.computed = !1, n.key = r, n.static = !1, void t.body.push(this.parseClassProperty(n));
						}i = !0;
					}this.parseClassMemberWithIsStatic(t, e, s, i);
				}, s.parseClassMemberWithIsStatic = function (t, e, s, i) {
					var r = e,
					    a = e,
					    n = e,
					    o = e,
					    h = r,
					    p = r;if (e.static = i, this.eat(O.star)) return h.kind = "method", this.parseClassPropertyName(h), "PrivateName" === h.key.type ? void this.pushClassPrivateMethod(t, a, !0, !1) : (this.isNonstaticConstructor(r) && this.raise(r.key.start, "Constructor can't be a generator"), void this.pushClassMethod(t, r, !0, !1, !1));var c = this.parseClassPropertyName(e),
					    l = "PrivateName" === c.type,
					    u = "Identifier" === c.type;if (this.parsePostMemberNameModifiers(p), this.isClassMethod()) {
						if (h.kind = "method", l) return void this.pushClassPrivateMethod(t, a, !1, !1);var d = this.isNonstaticConstructor(r);d && (r.kind = "constructor", r.decorators && this.raise(r.start, "You can't attach decorators to a class constructor"), s.hadConstructor && !this.hasPlugin("typescript") && this.raise(c.start, "Duplicate constructor in the same class"), s.hadConstructor = !0), this.pushClassMethod(t, r, !1, !1, d);
					} else if (this.isClassProperty()) l ? this.pushClassPrivateProperty(t, o) : this.pushClassProperty(t, n);else if (u && "async" === c.name && !this.isLineTerminator()) {
						var f = this.match(O.star);f && (this.expectPlugin("asyncGenerators"), this.next()), h.kind = "method", this.parseClassPropertyName(h), "PrivateName" === h.key.type ? this.pushClassPrivateMethod(t, a, f, !0) : (this.isNonstaticConstructor(r) && this.raise(r.key.start, "Constructor can't be an async function"), this.pushClassMethod(t, r, f, !0, !1));
					} else !u || "get" !== c.name && "set" !== c.name || this.isLineTerminator() && this.match(O.star) ? this.isLineTerminator() ? l ? this.pushClassPrivateProperty(t, o) : this.pushClassProperty(t, n) : this.unexpected() : (h.kind = c.name, this.parseClassPropertyName(r), "PrivateName" === h.key.type ? this.pushClassPrivateMethod(t, a, !1, !1) : (this.isNonstaticConstructor(r) && this.raise(r.key.start, "Constructor can't have get/set modifier"), this.pushClassMethod(t, r, !1, !1, !1)), this.checkGetterSetterParamCount(r));
				}, s.parseClassPropertyName = function (t) {
					var e = this.parsePropertyName(t);return t.computed || !t.static || "prototype" !== e.name && "prototype" !== e.value || this.raise(e.start, "Classes may not have static property named prototype"), "PrivateName" === e.type && "constructor" === e.id.name && this.raise(e.start, "Classes may not have a private field named '#constructor'"), e;
				}, s.pushClassProperty = function (t, e) {
					this.isNonstaticConstructor(e) && this.raise(e.key.start, "Classes may not have a non-static field named 'constructor'"), t.body.push(this.parseClassProperty(e));
				}, s.pushClassPrivateProperty = function (t, e) {
					this.expectPlugin("classPrivateProperties", e.key.start), t.body.push(this.parseClassPrivateProperty(e));
				}, s.pushClassMethod = function (t, e, s, i, r) {
					t.body.push(this.parseMethod(e, s, i, r, "ClassMethod"));
				}, s.pushClassPrivateMethod = function (t, e, s, i) {
					this.expectPlugin("classPrivateMethods", e.key.start), t.body.push(this.parseMethod(e, s, i, !1, "ClassPrivateMethod"));
				}, s.parsePostMemberNameModifiers = function (t) {}, s.parseAccessModifier = function () {}, s.parseClassPrivateProperty = function (t) {
					return this.state.inClassProperty = !0, t.value = this.eat(O.eq) ? this.parseMaybeAssign() : null, this.semicolon(), this.state.inClassProperty = !1, this.finishNode(t, "ClassPrivateProperty");
				}, s.parseClassProperty = function (t) {
					return t.typeAnnotation || this.expectPlugin("classProperties"), this.state.inClassProperty = !0, this.match(O.eq) ? (this.expectPlugin("classProperties"), this.next(), t.value = this.parseMaybeAssign()) : t.value = null, this.semicolon(), this.state.inClassProperty = !1, this.finishNode(t, "ClassProperty");
				}, s.parseClassId = function (t, e, s) {
					this.match(O.name) ? t.id = this.parseIdentifier() : s || !e ? t.id = null : this.unexpected(null, "A class name is required");
				}, s.parseClassSuper = function (t) {
					t.superClass = this.eat(O._extends) ? this.parseExprSubscripts() : null;
				}, s.parseExport = function (t) {
					if (this.shouldParseExportStar()) {
						if (this.parseExportStar(t), "ExportAllDeclaration" === t.type) return t;
					} else if (this.isExportDefaultSpecifier()) {
						this.expectPlugin("exportDefaultFrom");var e = this.startNode();e.exported = this.parseIdentifier(!0);var s = [this.finishNode(e, "ExportDefaultSpecifier")];if (t.specifiers = s, this.match(O.comma) && this.lookahead().type === O.star) {
							this.expect(O.comma);var i = this.startNode();this.expect(O.star), this.expectContextual("as"), i.exported = this.parseIdentifier(), s.push(this.finishNode(i, "ExportNamespaceSpecifier"));
						} else this.parseExportSpecifiersMaybe(t);this.parseExportFrom(t, !0);
					} else {
						if (this.eat(O._default)) return t.declaration = this.parseExportDefaultExpression(), this.checkExport(t, !0, !0), this.finishNode(t, "ExportDefaultDeclaration");if (this.shouldParseExportDeclaration()) {
							if (this.isContextual("async")) {
								var r = this.lookahead();r.type !== O._function && this.unexpected(r.start, 'Unexpected token, expected "function"');
							}t.specifiers = [], t.source = null, t.declaration = this.parseExportDeclaration(t);
						} else t.declaration = null, t.specifiers = this.parseExportSpecifiers(), this.parseExportFrom(t);
					}return this.checkExport(t, !0), this.finishNode(t, "ExportNamedDeclaration");
				}, s.parseExportDefaultExpression = function () {
					var t = this.startNode();if (this.eat(O._function)) return this.parseFunction(t, !0, !1, !1, !0);if (this.isContextual("async") && this.lookahead().type === O._function) return this.eatContextual("async"), this.eat(O._function), this.parseFunction(t, !0, !1, !0, !0);if (this.match(O._class)) return this.parseClass(t, !0, !0);if (this.match(O.at)) return this.parseDecorators(!1), this.parseClass(t, !0, !0);var e = this.parseMaybeAssign();return this.semicolon(), e;
				}, s.parseExportDeclaration = function (t) {
					return this.parseStatement(!0, !0);
				}, s.isExportDefaultSpecifier = function () {
					if (this.match(O.name)) return "async" !== this.state.value;if (!this.match(O._default)) return !1;var t = this.lookahead();return t.type === O.comma || t.type === O.name && "from" === t.value;
				}, s.parseExportSpecifiersMaybe = function (t) {
					this.eat(O.comma) && (t.specifiers = t.specifiers.concat(this.parseExportSpecifiers()));
				}, s.parseExportFrom = function (t, e) {
					this.eatContextual("from") ? (t.source = this.match(O.string) ? this.parseExprAtom() : this.unexpected(), this.checkExport(t)) : e ? this.unexpected() : t.source = null, this.semicolon();
				}, s.shouldParseExportStar = function () {
					return this.match(O.star);
				}, s.parseExportStar = function (t) {
					this.expect(O.star), this.isContextual("as") ? this.parseExportNamespace(t) : (this.parseExportFrom(t, !0), this.finishNode(t, "ExportAllDeclaration"));
				}, s.parseExportNamespace = function (t) {
					this.expectPlugin("exportNamespaceFrom");var e = this.startNodeAt(this.state.lastTokStart, this.state.lastTokStartLoc);this.next(), e.exported = this.parseIdentifier(!0), t.specifiers = [this.finishNode(e, "ExportNamespaceSpecifier")], this.parseExportSpecifiersMaybe(t), this.parseExportFrom(t, !0);
				}, s.shouldParseExportDeclaration = function () {
					return "var" === this.state.type.keyword || "const" === this.state.type.keyword || "let" === this.state.type.keyword || "function" === this.state.type.keyword || "class" === this.state.type.keyword || this.isContextual("async") || this.match(O.at) && this.expectPlugin("decorators2");
				}, s.checkExport = function (t, e, s) {
					if (e) if (s) this.checkDuplicateExports(t, "default");else if (t.specifiers && t.specifiers.length) for (var i = 0, r = t.specifiers; i < r.length; i++) {
						var a = r[i];this.checkDuplicateExports(a, a.exported.name);
					} else if (t.declaration) if ("FunctionDeclaration" === t.declaration.type || "ClassDeclaration" === t.declaration.type) this.checkDuplicateExports(t, t.declaration.id.name);else if ("VariableDeclaration" === t.declaration.type) for (var n = 0, o = t.declaration.declarations; n < o.length; n++) {
						var h = o[n];this.checkDeclaration(h.id);
					}if (this.state.decoratorStack[this.state.decoratorStack.length - 1].length) {
						var p = t.declaration && ("ClassDeclaration" === t.declaration.type || "ClassExpression" === t.declaration.type);if (!t.declaration || !p) throw this.raise(t.start, "You can only use decorators on an export when exporting a class");this.takeDecorators(t.declaration);
					}
				}, s.checkDeclaration = function (t) {
					if ("ObjectPattern" === t.type) for (var e = 0, s = t.properties; e < s.length; e++) {
						var i = s[e];this.checkDeclaration(i);
					} else if ("ArrayPattern" === t.type) for (var r = 0, a = t.elements; r < a.length; r++) {
						var n = a[r];n && this.checkDeclaration(n);
					} else "ObjectProperty" === t.type ? this.checkDeclaration(t.value) : "RestElement" === t.type ? this.checkDeclaration(t.argument) : "Identifier" === t.type && this.checkDuplicateExports(t, t.name);
				}, s.checkDuplicateExports = function (t, e) {
					this.state.exportedIdentifiers.indexOf(e) > -1 && this.raiseDuplicateExportError(t, e), this.state.exportedIdentifiers.push(e);
				}, s.raiseDuplicateExportError = function (t, e) {
					throw this.raise(t.start, "default" === e ? "Only one default export allowed per module." : "`" + e + "` has already been exported. Exported identifiers must be unique.");
				}, s.parseExportSpecifiers = function () {
					var t,
					    e = [],
					    s = !0;for (this.expect(O.braceL); !this.eat(O.braceR);) {
						if (s) s = !1;else if (this.expect(O.comma), this.eat(O.braceR)) break;var i = this.match(O._default);i && !t && (t = !0);var r = this.startNode();r.local = this.parseIdentifier(i), r.exported = this.eatContextual("as") ? this.parseIdentifier(!0) : r.local.__clone(), e.push(this.finishNode(r, "ExportSpecifier"));
					}return t && !this.isContextual("from") && this.unexpected(), e;
				}, s.parseImport = function (t) {
					return this.match(O.string) ? (t.specifiers = [], t.source = this.parseExprAtom()) : (t.specifiers = [], this.parseImportSpecifiers(t), this.expectContextual("from"), t.source = this.match(O.string) ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(t, "ImportDeclaration");
				}, s.shouldParseDefaultImport = function (t) {
					return this.match(O.name);
				}, s.parseImportSpecifierLocal = function (t, e, s, i) {
					e.local = this.parseIdentifier(), this.checkLVal(e.local, !0, void 0, i), t.specifiers.push(this.finishNode(e, s));
				}, s.parseImportSpecifiers = function (t) {
					var e = !0;if (!this.shouldParseDefaultImport(t) || (this.parseImportSpecifierLocal(t, this.startNode(), "ImportDefaultSpecifier", "default import specifier"), this.eat(O.comma))) {
						if (this.match(O.star)) {
							var s = this.startNode();return this.next(), this.expectContextual("as"), void this.parseImportSpecifierLocal(t, s, "ImportNamespaceSpecifier", "import namespace specifier");
						}for (this.expect(O.braceL); !this.eat(O.braceR);) {
							if (e) e = !1;else if (this.eat(O.colon) && this.unexpected(null, "ES2015 named imports do not destructure. Use another statement for destructuring after the import."), this.expectLenient(O.comma), this.eat(O.braceR)) break;this.parseImportSpecifier(t);
						}
					}
				}, s.parseImportSpecifier = function (t) {
					var e = this.startNode();e.imported = this.parseIdentifier(!0), this.eatContextual("as") ? e.local = this.parseIdentifier() : (this.checkReservedWord(e.imported.name, e.start, !0, !0), e.local = e.imported.__clone()), this.checkLVal(e.local, !0, void 0, "import specifier"), t.specifiers.push(this.finishNode(e, "ImportSpecifier"));
				}, e;
			}(function (t) {
				function e() {
					return t.apply(this, arguments) || this;
				}r(e, t);var s = e.prototype;return s.checkPropClash = function (t, e) {
					if (!t.computed && !t.kind) {
						var s = t.key;"__proto__" === ("Identifier" === s.type ? s.name : String(s.value)) && (e.proto && this.raise(s.start, "Redefinition of __proto__ property"), e.proto = !0);
					}
				}, s.getExpression = function () {
					this.nextToken();var t = this.parseExpression();return this.match(O.eof) || this.unexpected(), t.comments = this.state.comments, t;
				}, s.parseExpression = function (t, e) {
					var s = this.state.start,
					    i = this.state.startLoc,
					    r = this.parseMaybeAssign(t, e);if (this.match(O.comma)) {
						var a = this.startNodeAt(s, i);for (a.expressions = [r]; this.eat(O.comma);) {
							a.expressions.push(this.parseMaybeAssign(t, e));
						}return this.toReferencedList(a.expressions), this.finishNode(a, "SequenceExpression");
					}return r;
				}, s.parseMaybeAssign = function (t, e, s, i) {
					var r = this.state.start,
					    a = this.state.startLoc;if (this.match(O._yield) && this.state.inGenerator) {
						var n = this.parseYield();return s && (n = s.call(this, n, r, a)), n;
					}var o;e ? o = !1 : (e = { start: 0 }, o = !0), (this.match(O.parenL) || this.match(O.name) || this.match(O._yield)) && (this.state.potentialArrowAt = this.state.start);var h = this.parseMaybeConditional(t, e, i);if (s && (h = s.call(this, h, r, a)), this.state.type.isAssign) {
						this.hasPlugin("lenient") && this.match(O.eq) && this.raise(this.state.start, "You're using `=` in an expression, use `let` and `:=` instead.");var p = this.startNodeAt(r, a);if (p.operator = this.match(O.reassign) ? "=" : this.state.value, p.left = this.match(O.eq) || this.match(O.reassign) ? this.toAssignable(h, void 0, "assignment expression") : h, e.start = 0, this.checkLVal(h, void 0, void 0, "assignment expression"), h.extra && h.extra.parenthesized) {
							var c;"ObjectPattern" === h.type ? c = "`({a}) = 0` use `({a} = 0)`" : "ArrayPattern" === h.type && (c = "`([a]) = 0` use `([a] = 0)`"), c && this.raise(h.start, "You're trying to assign to a parenthesized expression, eg. instead of " + c);
						}return this.next(), p.right = this.parseMaybeAssign(t), this.finishNode(p, "AssignmentExpression");
					}return o && e.start && this.unexpected(e.start), h;
				}, s.parseMaybeConditional = function (t, e, s) {
					var i = this.state.start,
					    r = this.state.startLoc,
					    a = this.state.potentialArrowAt,
					    n = this.parseExprOps(t, e);return "ArrowFunctionExpression" === n.type && n.start === a ? n : e && e.start ? n : this.parseConditional(n, t, i, r, s);
				}, s.parseConditional = function (t, e, s, i, r) {
					if (this.eat(O.question)) {
						var a = this.startNodeAt(s, i);return a.test = t, a.consequent = this.parseMaybeAssign(), this.expectLenient(O.colon), a.alternate = this.parseMaybeAssign(e), this.finishNode(a, "ConditionalExpression");
					}return t;
				}, s.parseExprOps = function (t, e) {
					var s = this.state.start,
					    i = this.state.startLoc,
					    r = this.state.potentialArrowAt,
					    a = this.parseMaybeUnary(e);return "ArrowFunctionExpression" === a.type && a.start === r ? a : e && e.start ? a : this.parseExprOp(a, s, i, -1, t);
				}, s.parseExprOp = function (t, e, s, i, r) {
					var a = this.state.type.binop;if (!(null == a || r && this.match(O._in)) && a > i) {
						var n = this.startNodeAt(e, s);n.left = t, n.operator = this.state.value, "**" !== n.operator || "UnaryExpression" !== t.type || !t.extra || t.extra.parenthesizedArgument || t.extra.parenthesized || this.raise(t.argument.start, "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.");var o = this.state.type;this.next();var h = this.state.start,
						    p = this.state.startLoc;return "|>" === n.operator && (this.expectPlugin("pipelineOperator"), this.state.potentialArrowAt = h), "??" === n.operator && this.expectPlugin("nullishCoalescingOperator"), n.right = this.parseExprOp(this.parseMaybeUnary(), h, p, o.rightAssociative ? a - 1 : a, r), this.finishNode(n, o === O.logicalOR || o === O.logicalAND || o === O.nullishCoalescing ? "LogicalExpression" : "BinaryExpression"), this.parseExprOp(n, e, s, i, r);
					}return t;
				}, s.parseMaybeUnary = function (t) {
					if (this.state.type.prefix) {
						var e = this.startNode(),
						    s = this.match(O.incDec);e.operator = this.state.value, e.prefix = !0, "throw" === e.operator && this.expectPlugin("throwExpressions"), this.next();var i = this.state.type;if (e.argument = this.parseMaybeUnary(), this.addExtra(e, "parenthesizedArgument", !(i !== O.parenL || e.argument.extra && e.argument.extra.parenthesized)), t && t.start && this.unexpected(t.start), s) this.checkLVal(e.argument, void 0, void 0, "prefix operation");else if (this.state.strict && "delete" === e.operator) {
							var r = e.argument;"Identifier" === r.type ? this.raise(e.start, "Deleting local variable in strict mode") : "MemberExpression" === r.type && "PrivateName" === r.property.type && this.raise(e.start, "Deleting a private field is not allowed");
						}return this.finishNode(e, s ? "UpdateExpression" : "UnaryExpression");
					}var a = this.state.start,
					    n = this.state.startLoc,
					    o = this.parseExprSubscripts(t);if (t && t.start) return o;for (; this.state.type.postfix && !this.canInsertSemicolon();) {
						var h = this.startNodeAt(a, n);h.operator = this.state.value, h.prefix = !1, h.argument = o, this.checkLVal(o, void 0, void 0, "postfix operation"), this.next(), o = this.finishNode(h, "UpdateExpression");
					}return o;
				}, s.parseExprSubscripts = function (t) {
					var e = this.state.start,
					    s = this.state.startLoc,
					    i = this.state.potentialArrowAt,
					    r = this.parseExprAtom(t);return "ArrowFunctionExpression" === r.type && r.start === i ? r : t && t.start ? r : this.parseSubscripts(r, e, s);
				}, s.parseSubscripts = function (t, e, s, i) {
					var r = { stop: !1 };do {
						t = this.parseSubscript(t, e, s, i, r);
					} while (!r.stop);return t;
				}, s.parseSubscript = function (t, e, s, i, r) {
					if (!i && this.eat(O.doubleColon)) {
						var a = this.startNodeAt(e, s);return a.object = t, a.callee = this.parseNoCallExpr(), r.stop = !0, this.parseSubscripts(this.finishNode(a, "BindExpression"), e, s, i);
					}if (this.match(O.questionDot)) {
						if (this.expectPlugin("optionalChaining"), r.optionalChainMember = !0, i && this.lookahead().type == O.parenL) return r.stop = !0, t;this.next();var n = this.startNodeAt(e, s);if (this.eat(O.bracketL)) return n.object = t, n.property = this.parseExpression(), n.computed = !0, n.optional = !0, this.expect(O.bracketR), this.finishNode(n, "OptionalMemberExpression");if (this.eat(O.parenL)) {
							var o = this.atPossibleAsync(t);return n.callee = t, n.arguments = this.parseCallExpressionArguments(O.parenR, o), n.optional = !0, this.finishNode(n, "OptionalCallExpression");
						}return n.object = t, n.property = this.parseIdentifier(!0), n.computed = !1, n.optional = !0, this.finishNode(n, "OptionalMemberExpression");
					}if (this.eat(O.dot)) {
						var h = this.startNodeAt(e, s);return h.object = t, h.property = this.parseMaybePrivateName(), h.computed = !1, r.optionalChainMember ? (h.optional = !1, this.finishNode(h, "OptionalMemberExpression")) : this.finishNode(h, "MemberExpression");
					}if (!this.matchNoIndent() && this.eat(O.bracketL)) {
						var p = this.startNodeAt(e, s);return p.object = t, p.property = this.parseExpression(), p.computed = !0, this.expectLenient(O.bracketR), r.optionalChainMember ? (p.optional = !1, this.finishNode(p, "OptionalMemberExpression")) : this.finishNode(p, "MemberExpression");
					}if (!i && this.match(O.parenL)) {
						var c = this.atPossibleAsync(t);this.next();var l = this.startNodeAt(e, s);l.callee = t;var u = { start: -1 };return l.arguments = this.parseCallExpressionArguments(O.parenR, c, u), r.optionalChainMember ? this.finishOptionalCallExpression(l) : this.finishCallExpression(l), c && this.shouldParseAsyncArrow() ? (r.stop = !0, u.start > -1 && this.raise(u.start, "A trailing comma is not permitted after the rest element"), this.parseAsyncArrowFromCallExpression(this.startNodeAt(e, s), l)) : (this.toReferencedList(l.arguments), l);
					}if (!this.match(O.backQuote)) return r.stop = !0, t;var d = this.startNodeAt(e, s);if (d.tag = t, d.quasi = this.parseTemplate(!0), !r.optionalChainMember) return this.finishNode(d, "TaggedTemplateExpression");this.raise(e, "Tagged Template Literals are not allowed in optionalChain");
				}, s.atPossibleAsync = function (t) {
					return this.state.potentialArrowAt === t.start && "Identifier" === t.type && "async" === t.name && !this.canInsertSemicolon();
				}, s.finishCallExpression = function (t) {
					if ("Import" === t.callee.type) {
						1 !== t.arguments.length && this.raise(t.start, "import() requires exactly one argument");var e = t.arguments[0];e && "SpreadElement" === e.type && this.raise(e.start, "... is not allowed in import()");
					}return this.finishNode(t, "CallExpression");
				}, s.finishOptionalCallExpression = function (t) {
					if ("Import" === t.callee.type) {
						1 !== t.arguments.length && this.raise(t.start, "import() requires exactly one argument");var e = t.arguments[0];e && "SpreadElement" === e.type && this.raise(e.start, "... is not allowed in import()");
					}return this.finishNode(t, "OptionalCallExpression");
				}, s.parseCallExpressionArguments = function (t, e, s) {
					for (var i, r = [], a = !0; !this.eat(t);) {
						if (a) a = !1;else if (this.expectLenient(O.comma), this.eat(t)) break;this.match(O.parenL) && !i && (i = this.state.start), r.push(this.parseExprListItem(!1, e ? { start: 0 } : void 0, e ? { start: 0 } : void 0, e ? s : void 0));
					}return e && i && this.shouldParseAsyncArrow() && this.unexpected(), r;
				}, s.shouldParseAsyncArrow = function () {
					return this.match(O.arrow);
				}, s.parseAsyncArrowFromCallExpression = function (t, e) {
					var s = this.state.yieldInPossibleArrowParameters;return this.state.yieldInPossibleArrowParameters = null, this.expect(O.arrow), this.parseArrowExpression(t, e.arguments, !0), this.state.yieldInPossibleArrowParameters = s, t;
				}, s.parseNoCallExpr = function () {
					var t = this.state.start,
					    e = this.state.startLoc;return this.parseSubscripts(this.parseExprAtom(), t, e, !0);
				}, s.parseExprAtom = function (t) {
					var e,
					    s = this.state.potentialArrowAt === this.state.start;switch (this.state.type) {case O._super:
							return this.state.inMethod || this.state.inClassProperty || this.options.allowSuperOutsideMethod || this.raise(this.state.start, "super is only allowed in object methods and classes"), e = this.startNode(), this.next(), this.match(O.parenL) || this.match(O.bracketL) || this.match(O.dot) || this.unexpected(), this.match(O.parenL) && "constructor" !== this.state.inMethod && !this.options.allowSuperOutsideMethod && this.raise(e.start, "super() is only valid inside a class constructor. Make sure the method name is spelled exactly as 'constructor'."), this.finishNode(e, "Super");case O._import:
							return this.lookahead().type === O.dot ? this.parseImportMetaProperty() : (this.expectPlugin("dynamicImport"), e = this.startNode(), this.next(), this.match(O.parenL) || this.unexpected(null, O.parenL), this.finishNode(e, "Import"));case O._this:
							return e = this.startNode(), this.next(), this.finishNode(e, "ThisExpression");case O._yield:
							this.state.inGenerator && this.unexpected();case O.name:
							e = this.startNode();var i = "await" === this.state.value && this.state.inAsync,
							    r = this.shouldAllowYieldIdentifier(),
							    a = this.parseIdentifier(i || r);if ("await" === a.name) {
								if (this.state.inAsync || this.inModule) return this.parseAwait(e);
							} else {
								if ("async" === a.name && this.match(O._function) && !this.canInsertSemicolon()) return this.next(), this.parseFunction(e, !1, !1, !0);if (s && "async" === a.name && this.match(O.name)) {
									var n = this.state.yieldInPossibleArrowParameters;this.state.yieldInPossibleArrowParameters = null;var o = [this.parseIdentifier()];return this.expect(O.arrow), this.parseArrowExpression(e, o, !0), this.state.yieldInPossibleArrowParameters = n, e;
								}
							}if (s && !this.canInsertSemicolon() && this.eat(O.arrow)) {
								var h = this.state.yieldInPossibleArrowParameters;return this.state.yieldInPossibleArrowParameters = null, this.parseArrowExpression(e, [a]), this.state.yieldInPossibleArrowParameters = h, e;
							}return a;case O._do:
							this.expectPlugin("doExpressions");var p = this.startNode();this.next();var c = this.state.inFunction,
							    l = this.state.labels;return this.state.labels = [], this.state.inFunction = !1, p.body = this.parseBlock(!1), this.state.inFunction = c, this.state.labels = l, this.finishNode(p, "DoExpression");case O.regexp:
							var u = this.state.value;return e = this.parseLiteral(u.value, "RegExpLiteral"), e.pattern = u.pattern, e.flags = u.flags, e;case O.num:
							return this.parseLiteral(this.state.value, "NumericLiteral");case O.bigint:
							return this.parseLiteral(this.state.value, "BigIntLiteral");case O.string:
							return this.parseLiteral(this.state.value, "StringLiteral");case O._null:
							return e = this.startNode(), this.next(), this.finishNode(e, "NullLiteral");case O._true:case O._false:
							return this.parseBooleanLiteral();case O.parenL:
							return this.parseParenAndDistinguishExpression(s);case O.bracketL:
							return e = this.startNode(), this.next(), e.elements = this.parseExprList(O.bracketR, !0, t), this.toReferencedList(e.elements), this.finishNode(e, "ArrayExpression");case O.braceL:
							return this.parseObj(!1, t);case O._function:
							return this.parseFunctionExpression();case O.at:
							this.parseDecorators();case O._class:
							return e = this.startNode(), this.takeDecorators(e), this.parseClass(e, !1);case O._new:
							return this.parseNew();case O.backQuote:
							return this.parseTemplate(!1);case O.doubleColon:
							e = this.startNode(), this.next(), e.object = null;var d = e.callee = this.parseNoCallExpr();if ("MemberExpression" === d.type) return this.finishNode(e, "BindExpression");throw this.raise(d.start, "Binding should be performed on object property.");default:
							throw this.unexpected();}
				}, s.parseBooleanLiteral = function () {
					var t = this.startNode();return t.value = this.match(O._true), this.next(), this.finishNode(t, "BooleanLiteral");
				}, s.parseMaybePrivateName = function () {
					if (this.match(O.hash)) {
						this.expectOnePlugin(["classPrivateProperties", "classPrivateMethods"]);var t = this.startNode();return this.next(), t.id = this.parseIdentifier(!0), this.finishNode(t, "PrivateName");
					}return this.parseIdentifier(!0);
				}, s.parseFunctionExpression = function () {
					var t = this.startNode(),
					    e = this.parseIdentifier(!0);return this.state.inGenerator && this.eat(O.dot) ? this.parseMetaProperty(t, e, "sent") : this.parseFunction(t, !1);
				}, s.parseMetaProperty = function (t, e, s) {
					return t.meta = e, "function" === e.name && "sent" === s && (this.isContextual(s) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected()), t.property = this.parseIdentifier(!0), t.property.name !== s && this.raise(t.property.start, "The only valid meta property for " + e.name + " is " + e.name + "." + s), this.finishNode(t, "MetaProperty");
				}, s.parseImportMetaProperty = function () {
					var t = this.startNode(),
					    e = this.parseIdentifier(!0);return this.expect(O.dot), "import" === e.name && (this.isContextual("meta") ? this.expectPlugin("importMeta") : this.hasPlugin("importMeta") || this.raise(e.start, "Dynamic imports require a parameter: import('a.js').then")), this.inModule || this.raise(e.start, "import.meta may appear only with 'sourceType: \"module\"'"), this.parseMetaProperty(t, e, "meta");
				}, s.parseLiteral = function (t, e, s, i) {
					s = s || this.state.start, i = i || this.state.startLoc;var r = this.startNodeAt(s, i);return this.addExtra(r, "rawValue", t), this.addExtra(r, "raw", this.input.slice(s, this.state.end)), r.value = t, this.next(), this.finishNode(r, e);
				}, s.parseParenExpression = function () {
					this.expectLenient(O.parenL);var t = this.parseExpression();return this.expectLenient(O.parenR), t;
				}, s.parseParenAndDistinguishExpression = function (t) {
					var e,
					    s = this.state.start,
					    i = this.state.startLoc;this.expect(O.parenL);var r = this.state.maybeInArrowParameters,
					    a = this.state.yieldInPossibleArrowParameters;this.state.maybeInArrowParameters = !0, this.state.yieldInPossibleArrowParameters = null;for (var n, o, h = this.state.start, p = this.state.startLoc, c = [], l = { start: 0 }, u = { start: 0 }, d = !0; !this.match(O.parenR);) {
						if (d) d = !1;else if (this.expect(O.comma, u.start || null), this.match(O.parenR)) {
							o = this.state.start;break;
						}if (this.match(O.ellipsis)) {
							var f = this.state.start,
							    m = this.state.startLoc;n = this.state.start, c.push(this.parseParenItem(this.parseRest(), f, m)), this.match(O.comma) && this.lookahead().type === O.parenR && this.raise(this.state.start, "A trailing comma is not permitted after the rest element");break;
						}c.push(this.parseMaybeAssign(!1, l, this.parseParenItem, u));
					}var y = this.state.start,
					    x = this.state.startLoc;this.expect(O.parenR), this.state.maybeInArrowParameters = r;var v = this.startNodeAt(s, i);if (t && this.shouldParseArrow() && (v = this.parseArrow(v))) {
						for (var P = 0; P < c.length; P++) {
							var g = c[P];g.extra && g.extra.parenthesized && this.unexpected(g.extra.parenStart);
						}return this.parseArrowExpression(v, c), this.state.yieldInPossibleArrowParameters = a, v;
					}return this.state.yieldInPossibleArrowParameters = a, c.length || this.unexpected(this.state.lastTokStart), o && this.unexpected(o), n && this.unexpected(n), l.start && this.unexpected(l.start), u.start && this.unexpected(u.start), c.length > 1 ? ((e = this.startNodeAt(h, p)).expressions = c, this.toReferencedList(e.expressions), this.finishNodeAt(e, "SequenceExpression", y, x)) : e = c[0], this.addExtra(e, "parenthesized", !0), this.addExtra(e, "parenStart", s), e;
				}, s.shouldParseArrow = function () {
					return !this.canInsertSemicolon();
				}, s.parseArrow = function (t) {
					if (this.eat(O.arrow)) return t;
				}, s.parseParenItem = function (t, e, s) {
					return t;
				}, s.parseNew = function () {
					var t = this.startNode(),
					    e = this.parseIdentifier(!0);if (this.eat(O.dot)) {
						var s = this.parseMetaProperty(t, e, "target");if (!this.state.inFunction && !this.state.inClassProperty) {
							var i = "new.target can only be used in functions";this.hasPlugin("classProperties") && (i += " or class properties"), this.raise(s.start, i);
						}return s;
					}return t.callee = this.parseNoCallExpr(), "OptionalMemberExpression" !== t.callee.type && "OptionalCallExpression" !== t.callee.type || this.raise(this.state.lastTokEnd, "constructors in/after an Optional Chain are not allowed"), this.eat(O.questionDot) && this.raise(this.state.start, "constructors in/after an Optional Chain are not allowed"), this.parseNewArguments(t), this.finishNode(t, "NewExpression");
				}, s.parseNewArguments = function (t) {
					if (this.eat(O.parenL)) {
						var e = this.parseExprList(O.parenR);this.toReferencedList(e), t.arguments = e;
					} else t.arguments = [];
				}, s.parseTemplateElement = function (t) {
					var e = this.startNode();return null === this.state.value && (t ? this.state.invalidTemplateEscapePosition = null : this.raise(this.state.invalidTemplateEscapePosition || 0, "Invalid escape sequence in template")), e.value = { raw: this.input.slice(this.state.start, this.state.end).replace(/\r\n?/g, "\n"), cooked: this.state.value }, this.next(), e.tail = this.match(O.backQuote), this.finishNode(e, "TemplateElement");
				}, s.parseTemplate = function (t) {
					var e = this.startNode();this.next(), e.expressions = [];var s = this.parseTemplateElement(t);for (e.quasis = [s]; !s.tail;) {
						this.expect(O.dollarBraceL), e.expressions.push(this.parseExpression()), this.expect(O.braceR), e.quasis.push(s = this.parseTemplateElement(t));
					}return this.next(), this.finishNode(e, "TemplateLiteral");
				}, s.parseObj = function (t, e) {
					var s = [],
					    i = Object.create(null),
					    r = !0,
					    a = this.startNode();a.properties = [], this.next();for (var n = null; !this.eat(O.braceR);) {
						if (r) r = !1;else if (this.expectLenient(O.comma), this.eat(O.braceR)) break;if (this.match(O.at)) if (this.hasPlugin("decorators2")) this.raise(this.state.start, "Stage 2 decorators disallow object literal property decorators");else for (; this.match(O.at);) {
							s.push(this.parseDecorator());
						}var o = this.startNode(),
						    h = !1,
						    p = !1,
						    c = void 0,
						    l = void 0;if (s.length && (o.decorators = s, s = []), this.match(O.ellipsis)) {
							if (this.expectPlugin("objectRestSpread"), o = this.parseSpread(t ? { start: 0 } : void 0), t && this.toAssignable(o, !0, "object pattern"), a.properties.push(o), !t) continue;var u = this.state.start;if (null !== n) this.unexpected(n, "Cannot have multiple rest elements when destructuring");else {
								if (this.eat(O.braceR)) break;if (!this.match(O.comma) || this.lookahead().type !== O.braceR) {
									n = u;continue;
								}this.unexpected(u, "A trailing comma is not permitted after the rest element");
							}
						}if (o.method = !1, (t || e) && (c = this.state.start, l = this.state.startLoc), t || (h = this.eat(O.star)), !t && this.isContextual("async")) {
							h && this.unexpected();var d = this.parseIdentifier();this.match(O.colon) || this.match(O.parenL) || this.match(O.braceR) || this.match(O.eq) || this.match(O.comma) ? (o.key = d, o.computed = !1) : (p = !0, this.match(O.star) && (this.expectPlugin("asyncGenerators"), this.next(), h = !0), this.parsePropertyName(o));
						} else this.parsePropertyName(o);this.parseObjPropValue(o, c, l, h, p, t, e), this.checkPropClash(o, i), o.shorthand && this.addExtra(o, "shorthand", !0), a.properties.push(o);
					}return null !== n && this.unexpected(n, "The rest element has to be the last element when destructuring"), s.length && this.raise(this.state.start, "You have trailing decorators with no property"), this.finishNode(a, t ? "ObjectPattern" : "ObjectExpression");
				}, s.isGetterOrSetterMethod = function (t, e) {
					return !e && !t.computed && "Identifier" === t.key.type && ("get" === t.key.name || "set" === t.key.name) && (this.match(O.string) || this.match(O.num) || this.match(O.bracketL) || this.match(O.name) || !!this.state.type.keyword);
				}, s.checkGetterSetterParamCount = function (t) {
					var e = "get" === t.kind ? 0 : 1;if (t.params.length !== e) {
						var s = t.start;"get" === t.kind ? this.raise(s, "getter should have no params") : this.raise(s, "setter should have exactly one param");
					}
				}, s.parseObjectMethod = function (t, e, s, i) {
					return s || e || this.match(O.parenL) ? (i && this.unexpected(), t.kind = "method", t.method = !0, this.parseMethod(t, e, s, !1, "ObjectMethod")) : this.isGetterOrSetterMethod(t, i) ? ((e || s) && this.unexpected(), t.kind = t.key.name, this.parsePropertyName(t), this.parseMethod(t, !1, !1, !1, "ObjectMethod"), this.checkGetterSetterParamCount(t), t) : void 0;
				}, s.parseObjectProperty = function (t, e, s, i, r) {
					return t.shorthand = !1, this.eat(O.colon) ? (t.value = i ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssign(!1, r), this.finishNode(t, "ObjectProperty")) : t.computed || "Identifier" !== t.key.type ? void 0 : (this.checkReservedWord(t.key.name, t.key.start, !0, !0), i ? t.value = this.parseMaybeDefault(e, s, t.key.__clone()) : this.match(O.eq) && r ? (r.start || (r.start = this.state.start), t.value = this.parseMaybeDefault(e, s, t.key.__clone())) : t.value = t.key.__clone(), t.shorthand = !0, this.finishNode(t, "ObjectProperty"));
				}, s.parseObjPropValue = function (t, e, s, i, r, a, n) {
					var o = this.parseObjectMethod(t, i, r, a) || this.parseObjectProperty(t, e, s, a, n);return o || this.unexpected(), o;
				}, s.parsePropertyName = function (t) {
					if (this.eat(O.bracketL)) t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(O.bracketR);else {
						var e = this.state.inPropertyName;this.state.inPropertyName = !0, t.key = this.match(O.num) || this.match(O.string) ? this.parseExprAtom() : this.parseMaybePrivateName(), "PrivateName" !== t.key.type && (t.computed = !1), this.state.inPropertyName = e;
					}return t.key;
				}, s.initFunction = function (t, e) {
					t.id = null, t.generator = !1, t.async = !!e;
				}, s.parseMethod = function (t, e, s, i, r) {
					var a = this.state.inFunction,
					    n = this.state.inMethod,
					    o = this.state.inGenerator;this.state.inFunction = !0, this.state.inMethod = t.kind || !0, this.state.inGenerator = e, this.initFunction(t, s), t.generator = !!e;var h = i;return this.parseFunctionParams(t, h), this.parseFunctionBodyAndFinish(t, r), this.state.inFunction = a, this.state.inMethod = n, this.state.inGenerator = o, t;
				}, s.parseArrowExpression = function (t, e, s) {
					this.state.yieldInPossibleArrowParameters && this.raise(this.state.yieldInPossibleArrowParameters.start, "yield is not allowed in the parameters of an arrow function inside a generator");var i = this.state.inFunction;this.state.inFunction = !0, this.initFunction(t, s), e && this.setArrowFunctionParameters(t, e);var r = this.state.inGenerator,
					    a = this.state.maybeInArrowParameters;return this.state.inGenerator = !1, this.state.maybeInArrowParameters = !1, this.parseFunctionBody(t, !0), this.state.inGenerator = r, this.state.inFunction = i, this.state.maybeInArrowParameters = a, this.finishNode(t, "ArrowFunctionExpression");
				}, s.setArrowFunctionParameters = function (t, e) {
					t.params = this.toAssignableList(e, !0, "arrow function parameters");
				}, s.isStrictBody = function (t) {
					if ("BlockStatement" === t.body.type && t.body.directives.length) for (var e = 0, s = t.body.directives; e < s.length; e++) {
						if ("use strict" === s[e].value.value) return !0;
					}return !1;
				}, s.parseFunctionBodyAndFinish = function (t, e, s) {
					this.parseFunctionBody(t, s), this.finishNode(t, e);
				}, s.parseFunctionBody = function (t, e) {
					var s = e && !this.match(O.braceL) && !this.matchIndent(),
					    i = this.state.inParameters,
					    r = this.state.inAsync;if (this.state.inParameters = !1, this.state.inAsync = t.async, s) t.body = this.parseMaybeAssign();else {
						var a = this.state.inGenerator,
						    n = this.state.inFunction,
						    o = this.state.labels;if (this.state.inGenerator = t.generator, this.state.inFunction = !0, this.state.labels = [], t.body = this.parseBlock(!0), this.state.inFunction = n, this.state.inGenerator = a, this.state.labels = o, this.hasPlugin("lenient") && e && "BlockStatement" === t.body.type && 1 === t.body.body.length) {
							var h = t.body.body[0];"ExpressionStatement" === h.type && this.state.lastTokType !== O.semi && this.state.lastTokType !== O.braceR && (t.body = h.expression);
						}
					}this.state.inAsync = r, this.checkFunctionNameAndParams(t, e), this.state.inParameters = i;
				}, s.checkFunctionNameAndParams = function (t, e) {
					var s = this.isStrictBody(t),
					    i = this.state.strict || s || e,
					    r = this.state.strict;if (s && (this.state.strict = s), t.id && this.checkReservedWord(t.id, t.start, !0, !0), i) {
						var a = Object.create(null);t.id && this.checkLVal(t.id, !0, void 0, "function name");for (var n = 0, o = t.params; n < o.length; n++) {
							var h = o[n];s && "Identifier" !== h.type && this.raise(h.start, "Non-simple parameter in strict mode"), this.checkLVal(h, !0, a, "function parameter list");
						}
					}this.state.strict = r;
				}, s.parseExprList = function (t, e, s) {
					for (var i = [], r = !0; !this.eat(t);) {
						if (r) r = !1;else if (this.expectLenient(O.comma), this.eat(t)) break;i.push(this.parseExprListItem(e, s));
					}return i;
				}, s.parseExprListItem = function (t, e, s, i) {
					var r;if (t && this.match(O.comma)) r = null;else if (this.match(O.ellipsis)) {
						var a = this.state.start,
						    n = this.state.startLoc;r = this.parseParenItem(this.parseSpread(e, s), a, n), i && this.match(O.comma) && (i.start = this.state.start);
					} else r = this.parseMaybeAssign(!1, e, this.parseParenItem, s);return r;
				}, s.parseIdentifier = function (t) {
					var e = this.startNode(),
					    s = this.parseIdentifierName(e.start, t);return e.name = s, e.loc.identifierName = s, this.finishNode(e, "Identifier");
				}, s.parseIdentifierName = function (t, e) {
					e || this.checkReservedWord(this.state.value, this.state.start, !!this.state.type.keyword, !1);var s;if (this.match(O.name)) s = this.state.value;else {
						if (!this.state.type.keyword) throw this.unexpected();s = this.state.type.keyword;
					}return !e && "await" === s && this.state.inAsync && this.raise(t, "invalid use of await inside of an async function"), this.next(), s;
				}, s.checkReservedWord = function (t, e, s, i) {
					this.state.strict && (R.strict(t) || i && R.strictBind(t)) && this.raise(e, t + " is a reserved word in strict mode"), this.state.inGenerator && "yield" === t && this.raise(e, "yield is a reserved word inside generator functions"), (this.isReservedWord(t) || s && this.isKeyword(t)) && this.raise(e, t + " is a reserved word");
				}, s.parseAwait = function (t) {
					return this.state.inAsync || this.unexpected(), this.match(O.star) && this.raise(t.start, "await* has been removed from the async functions proposal. Use Promise.all() instead."), t.argument = this.parseMaybeUnary(), this.finishNode(t, "AwaitExpression");
				}, s.parseYield = function () {
					var t = this.startNode();return this.state.inParameters && this.raise(t.start, "yield is not allowed in generator parameters"), this.state.maybeInArrowParameters && !this.state.yieldInPossibleArrowParameters && (this.state.yieldInPossibleArrowParameters = t), this.next(), this.match(O.semi) || this.canInsertSemicolon() || !this.match(O.star) && !this.state.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(O.star), t.argument = this.parseMaybeAssign()), this.finishNode(t, "YieldExpression");
				}, e;
			}(function (t) {
				function e() {
					return t.apply(this, arguments) || this;
				}r(e, t);var s = e.prototype;return s.toAssignable = function (t, e, s) {
					if (t) switch (t.type) {case "Identifier":case "ObjectPattern":case "ArrayPattern":case "AssignmentPattern":
							break;case "ObjectExpression":
							t.type = "ObjectPattern";for (var i = 0; i < t.properties.length; i++) {
								var r = t.properties[i],
								    a = i === t.properties.length - 1;this.toAssignableObjectExpressionProp(r, e, a);
							}break;case "ObjectProperty":
							this.toAssignable(t.value, e, s);break;case "SpreadElement":
							this.checkToRestConversion(t), t.type = "RestElement";var n = t.argument;this.toAssignable(n, e, s);break;case "ArrayExpression":
							t.type = "ArrayPattern", this.toAssignableList(t.elements, e, s);break;case "AssignmentExpression":
							"=" === t.operator ? (t.type = "AssignmentPattern", delete t.operator) : this.raise(t.left.end, "Only '=' operator can be used for specifying default value.");break;case "MemberExpression":
							if (!e) break;default:
							var o = "Invalid left-hand side" + (s ? " in " + s : "expression");this.raise(t.start, o);}return t;
				}, s.toAssignableObjectExpressionProp = function (t, e, s) {
					if ("ObjectMethod" === t.type) {
						var i = "get" === t.kind || "set" === t.kind ? "Object pattern can't contain getter or setter" : "Object pattern can't contain methods";this.raise(t.key.start, i);
					} else "SpreadElement" !== t.type || s ? this.toAssignable(t, e, "object destructuring pattern") : this.raise(t.start, "The rest element has to be the last element when destructuring");
				}, s.toAssignableList = function (t, e, s) {
					var i = t.length;if (i) {
						var r = t[i - 1];if (r && "RestElement" === r.type) --i;else if (r && "SpreadElement" === r.type) {
							r.type = "RestElement";var a = r.argument;this.toAssignable(a, e, s), -1 === ["Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern"].indexOf(a.type) && this.unexpected(a.start), --i;
						}
					}for (var n = 0; n < i; n++) {
						var o = t[n];o && "SpreadElement" === o.type && this.raise(o.start, "The rest element has to be the last element when destructuring"), o && this.toAssignable(o, e, s);
					}return t;
				}, s.toReferencedList = function (t) {
					return t;
				}, s.parseSpread = function (t, e) {
					var s = this.startNode();return this.next(), s.argument = this.parseMaybeAssign(!1, t, void 0, e), this.finishNode(s, "SpreadElement");
				}, s.parseRest = function () {
					var t = this.startNode();return this.next(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement");
				}, s.shouldAllowYieldIdentifier = function () {
					return this.match(O._yield) && !this.state.strict && !this.state.inGenerator;
				}, s.parseBindingIdentifier = function () {
					return this.parseIdentifier(this.shouldAllowYieldIdentifier());
				}, s.parseBindingAtom = function () {
					switch (this.state.type) {case O._yield:case O.name:
							return this.parseBindingIdentifier();case O.bracketL:
							var t = this.startNode();return this.next(), t.elements = this.parseBindingList(O.bracketR, !0), this.finishNode(t, "ArrayPattern");case O.braceL:
							return this.parseObj(!0);default:
							throw this.unexpected();}
				}, s.parseBindingList = function (t, e, s) {
					for (var i = [], r = !0; !this.eat(t);) {
						if (r ? r = !1 : this.expectLenient(O.comma), e && this.match(O.comma)) i.push(null);else {
							if (this.eat(t)) break;if (this.match(O.ellipsis)) {
								i.push(this.parseAssignableListItemTypes(this.parseRest())), this.expect(t);break;
							}var a = [];for (this.match(O.at) && this.hasPlugin("decorators2") && this.raise(this.state.start, "Stage 2 decorators cannot be used to decorate parameters"); this.match(O.at);) {
								a.push(this.parseDecorator());
							}i.push(this.parseAssignableListItem(s, a));
						}
					}return i;
				}, s.parseAssignableListItem = function (t, e) {
					var s = this.parseMaybeDefault();this.parseAssignableListItemTypes(s);var i = this.parseMaybeDefault(s.start, s.loc.start, s);return e.length && (s.decorators = e), i;
				}, s.parseAssignableListItemTypes = function (t) {
					return t;
				}, s.parseMaybeDefault = function (t, e, s) {
					if (e = e || this.state.startLoc, t = t || this.state.start, s = s || this.parseBindingAtom(), !this.eat(O.eq)) return s;var i = this.startNodeAt(t, e);return i.left = s, i.right = this.parseMaybeAssign(), this.finishNode(i, "AssignmentPattern");
				}, s.checkLVal = function (t, e, s, i) {
					switch (t.type) {case "Identifier":
							if (this.checkReservedWord(t.name, t.start, !1, !0), s) {
								var r = "_" + t.name;s[r] ? this.raise(t.start, "Argument name clash in strict mode") : s[r] = !0;
							}break;case "MemberExpression":
							e && this.raise(t.start, "Binding member expression");break;case "ObjectPattern":
							for (var a = 0, n = t.properties; a < n.length; a++) {
								var o = n[a];"ObjectProperty" === o.type && (o = o.value), this.checkLVal(o, e, s, "object destructuring pattern");
							}break;case "ArrayPattern":
							for (var h = 0, p = t.elements; h < p.length; h++) {
								var c = p[h];c && this.checkLVal(c, e, s, "array destructuring pattern");
							}break;case "AssignmentPattern":
							this.checkLVal(t.left, e, s, "assignment pattern");break;case "RestElement":
							this.checkLVal(t.argument, e, s, "rest element");break;default:
							var l = (e ? "Binding invalid" : "Invalid") + " left-hand side" + (i ? " in " + i : "expression");this.raise(t.start, l);}
				}, s.checkToRestConversion = function (t) {
					-1 === ["Identifier", "MemberExpression"].indexOf(t.argument.type) && this.raise(t.argument.start, "Invalid rest operator's argument");
				}, e;
			}(function (t) {
				function e() {
					return t.apply(this, arguments) || this;
				}r(e, t);var s = e.prototype;return s.startNode = function () {
					var t = new at(this, this.state.start, this.state.startLoc);return this.hasPlugin("lenient") && (t.extra = t.extra || {}, t.extra.indent = this.state.indent), t;
				}, s.startNodeAt = function (t, e) {
					return new at(this, t, e);
				}, s.startNodeAtNode = function (t) {
					return this.startNodeAt(t.start, t.loc.start);
				}, s.finishNode = function (t, e) {
					return this.finishNodeAt(t, e, this.state.lastTokEnd, this.state.lastTokEndLoc);
				}, s.finishNodeAt = function (t, e, s, i) {
					return t.type = e, t.end = s, t.loc.end = i, this.options.ranges && (t.range[1] = s), this.processComment(t), t;
				}, s.resetStartLocationFromNode = function (t, e) {
					t.start = e.start, t.loc.start = e.loc.start, this.options.ranges && (t.range[0] = e.range[0]);
				}, e;
			}(it))))),
			    lt = ["any", "bool", "boolean", "empty", "false", "mixed", "null", "number", "static", "string", "true", "typeof", "void"],
			    ut = { const: "declare export var", let: "declare export var", type: "export type", interface: "export interface" },
			    dt = { quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: " ", iexcl: "¡", cent: "¢", pound: "£", curren: "¤", yen: "¥", brvbar: "¦", sect: "§", uml: "¨", copy: "©", ordf: "ª", laquo: "«", not: "¬", shy: "­", reg: "®", macr: "¯", deg: "°", plusmn: "±", sup2: "²", sup3: "³", acute: "´", micro: "µ", para: "¶", middot: "·", cedil: "¸", sup1: "¹", ordm: "º", raquo: "»", frac14: "¼", frac12: "½", frac34: "¾", iquest: "¿", Agrave: "À", Aacute: "Á", Acirc: "Â", Atilde: "Ã", Auml: "Ä", Aring: "Å", AElig: "Æ", Ccedil: "Ç", Egrave: "È", Eacute: "É", Ecirc: "Ê", Euml: "Ë", Igrave: "Ì", Iacute: "Í", Icirc: "Î", Iuml: "Ï", ETH: "Ð", Ntilde: "Ñ", Ograve: "Ò", Oacute: "Ó", Ocirc: "Ô", Otilde: "Õ", Ouml: "Ö", times: "×", Oslash: "Ø", Ugrave: "Ù", Uacute: "Ú", Ucirc: "Û", Uuml: "Ü", Yacute: "Ý", THORN: "Þ", szlig: "ß", agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å", aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë", igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", eth: "ð", ntilde: "ñ", ograve: "ò", oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", divide: "÷", oslash: "ø", ugrave: "ù", uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", thorn: "þ", yuml: "ÿ", OElig: "Œ", oelig: "œ", Scaron: "Š", scaron: "š", Yuml: "Ÿ", fnof: "ƒ", circ: "ˆ", tilde: "˜", Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ", Eta: "Η", Theta: "Θ", Iota: "Ι", Kappa: "Κ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Omicron: "Ο", Pi: "Π", Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Upsilon: "Υ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω", alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ", tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω", thetasym: "ϑ", upsih: "ϒ", piv: "ϖ", ensp: " ", emsp: " ", thinsp: " ", zwnj: "‌", zwj: "‍", lrm: "‎", rlm: "‏", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", dagger: "†", Dagger: "‡", bull: "•", hellip: "…", permil: "‰", prime: "′", Prime: "″", lsaquo: "‹", rsaquo: "›", oline: "‾", frasl: "⁄", euro: "€", image: "ℑ", weierp: "℘", real: "ℜ", trade: "™", alefsym: "ℵ", larr: "←", uarr: "↑", rarr: "→", darr: "↓", harr: "↔", crarr: "↵", lArr: "⇐", uArr: "⇑", rArr: "⇒", dArr: "⇓", hArr: "⇔", forall: "∀", part: "∂", exist: "∃", empty: "∅", nabla: "∇", isin: "∈", notin: "∉", ni: "∋", prod: "∏", sum: "∑", minus: "−", lowast: "∗", radic: "√", prop: "∝", infin: "∞", ang: "∠", and: "∧", or: "∨", cap: "∩", cup: "∪", int: "∫", there4: "∴", sim: "∼", cong: "≅", asymp: "≈", ne: "≠", equiv: "≡", le: "≤", ge: "≥", sub: "⊂", sup: "⊃", nsub: "⊄", sube: "⊆", supe: "⊇", oplus: "⊕", otimes: "⊗", perp: "⊥", sdot: "⋅", lceil: "⌈", rceil: "⌉", lfloor: "⌊", rfloor: "⌋", lang: "〈", rang: "〉", loz: "◊", spades: "♠", clubs: "♣", hearts: "♥", diams: "♦" },
			    ft = /^[\da-fA-F]+$/,
			    mt = /^\d+$/;H.j_oTag = new J("<tag", !1), H.j_cTag = new J("</tag", !1), H.j_expr = new J("<tag>...</tag>", !0, !0), O.jsxName = new L("jsxName"), O.jsxText = new L("jsxText", { beforeExpr: !0 }), O.jsxTagStart = new L("jsxTagStart", { startsExpr: !0 }), O.jsxTagEnd = new L("jsxTagEnd"), O.jsxTagStart.updateContext = function () {
				this.state.context.push(H.j_expr), this.state.context.push(H.j_oTag), this.state.exprAllowed = !1;
			}, O.jsxTagEnd.updateContext = function (t) {
				var e = this.state.context.pop();e === H.j_oTag && t === O.slash || e === H.j_cTag ? (this.state.context.pop(), this.state.exprAllowed = this.curContext() === H.j_expr) : this.state.exprAllowed = !0;
			};pt.estree = function (t) {
				return function (t) {
					function e() {
						return t.apply(this, arguments) || this;
					}r(e, t);var s = e.prototype;return s.estreeParseRegExpLiteral = function (t) {
						var e = t.pattern,
						    s = t.flags,
						    i = null;try {
							i = new RegExp(e, s);
						} catch (t) {}var r = this.estreeParseLiteral(i);return r.regex = { pattern: e, flags: s }, r;
					}, s.estreeParseLiteral = function (t) {
						return this.parseLiteral(t, "Literal");
					}, s.directiveToStmt = function (t) {
						var e = t.value,
						    s = this.startNodeAt(t.start, t.loc.start),
						    i = this.startNodeAt(e.start, e.loc.start);return i.value = e.value, i.raw = e.extra.raw, s.expression = this.finishNodeAt(i, "Literal", e.end, e.loc.end), s.directive = e.extra.raw.slice(1, -1), this.finishNodeAt(s, "ExpressionStatement", t.end, t.loc.end);
					}, s.initFunction = function (e, s) {
						t.prototype.initFunction.call(this, e, s), e.expression = !1;
					}, s.checkDeclaration = function (e) {
						y(e) ? this.checkDeclaration(e.value) : t.prototype.checkDeclaration.call(this, e);
					}, s.checkGetterSetterParamCount = function (t) {
						var e = "get" === t.kind ? 0 : 1;if (t.value.params.length !== e) {
							var s = t.start;"get" === t.kind ? this.raise(s, "getter should have no params") : this.raise(s, "setter should have exactly one param");
						}
					}, s.checkLVal = function (e, s, i, r) {
						var a = this;switch (e.type) {case "ObjectPattern":
								e.properties.forEach(function (t) {
									a.checkLVal("Property" === t.type ? t.value : t, s, i, "object destructuring pattern");
								});break;default:
								t.prototype.checkLVal.call(this, e, s, i, r);}
					}, s.checkPropClash = function (t, e) {
						if (!t.computed && y(t)) {
							var s = t.key;"__proto__" === ("Identifier" === s.type ? s.name : String(s.value)) && (e.proto && this.raise(s.start, "Redefinition of __proto__ property"), e.proto = !0);
						}
					}, s.isStrictBody = function (t) {
						if ("BlockStatement" === t.body.type && t.body.body.length > 0) for (var e = 0, s = t.body.body; e < s.length; e++) {
							var i = s[e];if ("ExpressionStatement" !== i.type || "Literal" !== i.expression.type) break;if ("use strict" === i.expression.value) return !0;
						}return !1;
					}, s.isValidDirective = function (t) {
						return !("ExpressionStatement" !== t.type || "Literal" !== t.expression.type || "string" != typeof t.expression.value || t.expression.extra && t.expression.extra.parenthesized);
					}, s.stmtToDirective = function (e) {
						var s = t.prototype.stmtToDirective.call(this, e),
						    i = e.expression.value;return s.value.value = i, s;
					}, s.parseBlockBody = function (e, s, i, r) {
						var a = this;t.prototype.parseBlockBody.call(this, e, s, i, r);var n = e.directives.map(function (t) {
							return a.directiveToStmt(t);
						});e.body = n.concat(e.body), delete e.directives;
					}, s.pushClassMethod = function (t, e, s, i, r) {
						this.parseMethod(e, s, i, r, "MethodDefinition"), e.typeParameters && (e.value.typeParameters = e.typeParameters, delete e.typeParameters), t.body.push(e);
					}, s.parseExprAtom = function (e) {
						switch (this.state.type) {case O.regexp:
								return this.estreeParseRegExpLiteral(this.state.value);case O.num:case O.string:
								return this.estreeParseLiteral(this.state.value);case O._null:
								return this.estreeParseLiteral(null);case O._true:
								return this.estreeParseLiteral(!0);case O._false:
								return this.estreeParseLiteral(!1);default:
								return t.prototype.parseExprAtom.call(this, e);}
					}, s.parseLiteral = function (e, s, i, r) {
						var a = t.prototype.parseLiteral.call(this, e, s, i, r);return a.raw = a.extra.raw, delete a.extra, a;
					}, s.parseFunctionBody = function (e, s) {
						t.prototype.parseFunctionBody.call(this, e, s), e.expression = "BlockStatement" !== e.body.type;
					}, s.parseMethod = function (e, s, i, r, a) {
						var n = this.startNode();return n.kind = e.kind, n = t.prototype.parseMethod.call(this, n, s, i, r, "FunctionExpression"), delete n.kind, e.value = n, this.finishNode(e, a);
					}, s.parseObjectMethod = function (e, s, i, r) {
						var a = t.prototype.parseObjectMethod.call(this, e, s, i, r);return a && (a.type = "Property", "method" === a.kind && (a.kind = "init"), a.shorthand = !1), a;
					}, s.parseObjectProperty = function (e, s, i, r, a) {
						var n = t.prototype.parseObjectProperty.call(this, e, s, i, r, a);return n && (n.kind = "init", n.type = "Property"), n;
					}, s.toAssignable = function (e, s, i) {
						return y(e) ? (this.toAssignable(e.value, s, i), e) : t.prototype.toAssignable.call(this, e, s, i);
					}, s.toAssignableObjectExpressionProp = function (e, s, i) {
						"get" === e.kind || "set" === e.kind ? this.raise(e.key.start, "Object pattern can't contain getter or setter") : e.method ? this.raise(e.key.start, "Object pattern can't contain methods") : t.prototype.toAssignableObjectExpressionProp.call(this, e, s, i);
					}, e;
				}(t);
			}, pt.flow = function (t) {
				return function (t) {
					function e() {
						return t.apply(this, arguments) || this;
					}r(e, t);var s = e.prototype;return s.flowParseTypeInitialiser = function (t) {
						var e = this.state.inType;this.state.inType = !0, this.expect(t || O.colon);var s = this.flowParseType();return this.state.inType = e, s;
					}, s.flowParsePredicate = function () {
						var t = this.startNode(),
						    e = this.state.startLoc,
						    s = this.state.start;this.expect(O.modulo);var i = this.state.startLoc;return this.expectContextual("checks"), e.line === i.line && e.column === i.column - 1 || this.raise(s, "Spaces between ´%´ and ´checks´ are not allowed here."), this.eat(O.parenL) ? (t.value = this.parseExpression(), this.expect(O.parenR), this.finishNode(t, "DeclaredPredicate")) : this.finishNode(t, "InferredPredicate");
					}, s.flowParseTypeAndPredicateInitialiser = function () {
						var t = this.state.inType;this.state.inType = !0, this.expect(O.colon);var e = null,
						    s = null;return this.match(O.modulo) ? (this.state.inType = t, s = this.flowParsePredicate()) : (e = this.flowParseType(), this.state.inType = t, this.match(O.modulo) && (s = this.flowParsePredicate())), [e, s];
					}, s.flowParseDeclareClass = function (t) {
						return this.next(), this.flowParseInterfaceish(t, !0), this.finishNode(t, "DeclareClass");
					}, s.flowParseDeclareFunction = function (t) {
						this.next();var e = t.id = this.parseIdentifier(),
						    s = this.startNode(),
						    i = this.startNode();this.isRelational("<") ? s.typeParameters = this.flowParseTypeParameterDeclaration() : s.typeParameters = null, this.expect(O.parenL);var r = this.flowParseFunctionTypeParams();s.params = r.params, s.rest = r.rest, this.expect(O.parenR);var a = this.flowParseTypeAndPredicateInitialiser();return s.returnType = a[0], t.predicate = a[1], i.typeAnnotation = this.finishNode(s, "FunctionTypeAnnotation"), e.typeAnnotation = this.finishNode(i, "TypeAnnotation"), this.finishNode(e, e.type), this.semicolon(), this.finishNode(t, "DeclareFunction");
					}, s.flowParseDeclare = function (t, e) {
						if (this.match(O._class)) return this.flowParseDeclareClass(t);if (this.match(O._function)) return this.flowParseDeclareFunction(t);if (this.match(O._var)) return this.flowParseDeclareVariable(t);if (this.isContextual("module")) return this.lookahead().type === O.dot ? this.flowParseDeclareModuleExports(t) : (e && this.unexpected(null, "`declare module` cannot be used inside another `declare module`"), this.flowParseDeclareModule(t));if (this.isContextual("type")) return this.flowParseDeclareTypeAlias(t);if (this.isContextual("opaque")) return this.flowParseDeclareOpaqueType(t);if (this.isContextual("interface")) return this.flowParseDeclareInterface(t);if (this.match(O._export)) return this.flowParseDeclareExportDeclaration(t, e);throw this.unexpected();
					}, s.flowParseDeclareVariable = function (t) {
						return this.next(), t.id = this.flowParseTypeAnnotatableIdentifier(!0), this.semicolon(), this.finishNode(t, "DeclareVariable");
					}, s.flowParseDeclareModule = function (t) {
						var e = this;this.next(), this.match(O.string) ? t.id = this.parseExprAtom() : t.id = this.parseIdentifier();var s = t.body = this.startNode(),
						    i = s.body = [];for (this.expect(O.braceL); !this.match(O.braceR);) {
							var r = this.startNode();if (this.match(O._import)) {
								var a = this.lookahead();"type" !== a.value && "typeof" !== a.value && this.unexpected(null, "Imports within a `declare module` body must always be `import type` or `import typeof`"), this.next(), this.parseImport(r);
							} else this.expectContextual("declare", "Only declares and type imports are allowed inside declare module"), r = this.flowParseDeclare(r, !0);i.push(r);
						}this.expect(O.braceR), this.finishNode(s, "BlockStatement");var n = null,
						    o = !1,
						    h = "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module";return i.forEach(function (t) {
							x(t) ? ("CommonJS" === n && e.unexpected(t.start, h), n = "ES") : "DeclareModuleExports" === t.type && (o && e.unexpected(t.start, "Duplicate `declare module.exports` statement"), "ES" === n && e.unexpected(t.start, h), n = "CommonJS", o = !0);
						}), t.kind = n || "CommonJS", this.finishNode(t, "DeclareModule");
					}, s.flowParseDeclareExportDeclaration = function (t, e) {
						if (this.expect(O._export), this.eat(O._default)) return this.match(O._function) || this.match(O._class) ? t.declaration = this.flowParseDeclare(this.startNode()) : (t.declaration = this.flowParseType(), this.semicolon()), t.default = !0, this.finishNode(t, "DeclareExportDeclaration");if (this.match(O._const) || this.match(O._let) || (this.isContextual("type") || this.isContextual("interface")) && !e) {
							var s = this.state.value,
							    i = ut[s];this.unexpected(this.state.start, "`declare export " + s + "` is not supported. Use `" + i + "` instead");
						}if (this.match(O._var) || this.match(O._function) || this.match(O._class) || this.isContextual("opaque")) return t.declaration = this.flowParseDeclare(this.startNode()), t.default = !1, this.finishNode(t, "DeclareExportDeclaration");if (this.match(O.star) || this.match(O.braceL) || this.isContextual("interface") || this.isContextual("type") || this.isContextual("opaque")) return "ExportNamedDeclaration" === (t = this.parseExport(t)).type && (t.type = "ExportDeclaration", t.default = !1, delete t.exportKind), t.type = "Declare" + t.type, t;throw this.unexpected();
					}, s.flowParseDeclareModuleExports = function (t) {
						return this.expectContextual("module"), this.expect(O.dot), this.expectContextual("exports"), t.typeAnnotation = this.flowParseTypeAnnotation(), this.semicolon(), this.finishNode(t, "DeclareModuleExports");
					}, s.flowParseDeclareTypeAlias = function (t) {
						return this.next(), this.flowParseTypeAlias(t), this.finishNode(t, "DeclareTypeAlias");
					}, s.flowParseDeclareOpaqueType = function (t) {
						return this.next(), this.flowParseOpaqueType(t, !0), this.finishNode(t, "DeclareOpaqueType");
					}, s.flowParseDeclareInterface = function (t) {
						return this.next(), this.flowParseInterfaceish(t), this.finishNode(t, "DeclareInterface");
					}, s.flowParseInterfaceish = function (t, e) {
						if (t.id = this.flowParseRestrictedIdentifier(!e), this.isRelational("<") ? t.typeParameters = this.flowParseTypeParameterDeclaration() : t.typeParameters = null, t.extends = [], t.mixins = [], this.eat(O._extends)) do {
							t.extends.push(this.flowParseInterfaceExtends());
						} while (!e && this.eat(O.comma));if (this.isContextual("mixins")) {
							this.next();do {
								t.mixins.push(this.flowParseInterfaceExtends());
							} while (this.eat(O.comma));
						}t.body = this.flowParseObjectType(!0, !1, !1);
					}, s.flowParseInterfaceExtends = function () {
						var t = this.startNode();return t.id = this.flowParseQualifiedTypeIdentifier(), this.isRelational("<") ? t.typeParameters = this.flowParseTypeParameterInstantiation() : t.typeParameters = null, this.finishNode(t, "InterfaceExtends");
					}, s.flowParseInterface = function (t) {
						return this.flowParseInterfaceish(t), this.finishNode(t, "InterfaceDeclaration");
					}, s.checkReservedType = function (t, e) {
						lt.indexOf(t) > -1 && this.raise(e, "Cannot overwrite primitive type " + t);
					}, s.flowParseRestrictedIdentifier = function (t) {
						return this.checkReservedType(this.state.value, this.state.start), this.parseIdentifier(t);
					}, s.flowParseTypeAlias = function (t) {
						return t.id = this.flowParseRestrictedIdentifier(), this.isRelational("<") ? t.typeParameters = this.flowParseTypeParameterDeclaration() : t.typeParameters = null, t.right = this.flowParseTypeInitialiser(O.eq), this.semicolon(), this.finishNode(t, "TypeAlias");
					}, s.flowParseOpaqueType = function (t, e) {
						return this.expectContextual("type"), t.id = this.flowParseRestrictedIdentifier(!0), this.isRelational("<") ? t.typeParameters = this.flowParseTypeParameterDeclaration() : t.typeParameters = null, t.supertype = null, this.match(O.colon) && (t.supertype = this.flowParseTypeInitialiser(O.colon)), t.impltype = null, e || (t.impltype = this.flowParseTypeInitialiser(O.eq)), this.semicolon(), this.finishNode(t, "OpaqueType");
					}, s.flowParseTypeParameter = function () {
						var t = this.startNode(),
						    e = this.flowParseVariance(),
						    s = this.flowParseTypeAnnotatableIdentifier();return t.name = s.name, t.variance = e, t.bound = s.typeAnnotation, this.match(O.eq) && (this.eat(O.eq), t.default = this.flowParseType()), this.finishNode(t, "TypeParameter");
					}, s.flowParseTypeParameterDeclaration = function () {
						var t = this.state.inType,
						    e = this.startNode();e.params = [], this.state.inType = !0, this.isRelational("<") || this.match(O.jsxTagStart) ? this.next() : this.unexpected();do {
							e.params.push(this.flowParseTypeParameter()), this.isRelational(">") || this.expect(O.comma);
						} while (!this.isRelational(">"));return this.expectRelational(">"), this.state.inType = t, this.finishNode(e, "TypeParameterDeclaration");
					}, s.flowParseTypeParameterInstantiation = function () {
						var t = this.startNode(),
						    e = this.state.inType;for (t.params = [], this.state.inType = !0, this.expectRelational("<"); !this.isRelational(">");) {
							t.params.push(this.flowParseType()), this.isRelational(">") || this.expect(O.comma);
						}return this.expectRelational(">"), this.state.inType = e, this.finishNode(t, "TypeParameterInstantiation");
					}, s.flowParseObjectPropertyKey = function () {
						return this.match(O.num) || this.match(O.string) ? this.parseExprAtom() : this.parseIdentifier(!0);
					}, s.flowParseObjectTypeIndexer = function (t, e, s) {
						return t.static = e, this.expect(O.bracketL), this.lookahead().type === O.colon ? (t.id = this.flowParseObjectPropertyKey(), t.key = this.flowParseTypeInitialiser()) : (t.id = null, t.key = this.flowParseType()), this.expect(O.bracketR), t.value = this.flowParseTypeInitialiser(), t.variance = s, this.finishNode(t, "ObjectTypeIndexer");
					}, s.flowParseObjectTypeMethodish = function (t) {
						for (t.params = [], t.rest = null, t.typeParameters = null, this.isRelational("<") && (t.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(O.parenL); !this.match(O.parenR) && !this.match(O.ellipsis);) {
							t.params.push(this.flowParseFunctionTypeParam()), this.match(O.parenR) || this.expect(O.comma);
						}return this.eat(O.ellipsis) && (t.rest = this.flowParseFunctionTypeParam()), this.expect(O.parenR), t.returnType = this.flowParseTypeInitialiser(), this.finishNode(t, "FunctionTypeAnnotation");
					}, s.flowParseObjectTypeCallProperty = function (t, e) {
						var s = this.startNode();return t.static = e, t.value = this.flowParseObjectTypeMethodish(s), this.finishNode(t, "ObjectTypeCallProperty");
					}, s.flowParseObjectType = function (t, e, s) {
						var i = this.state.inType;this.state.inType = !0;var r = this.startNode();r.callProperties = [], r.properties = [], r.indexers = [];var a, n;for (e && this.match(O.braceBarL) ? (this.expect(O.braceBarL), a = O.braceBarR, n = !0) : (this.expect(O.braceL), a = O.braceR, n = !1), r.exact = n; !this.match(a);) {
							var o = !1,
							    h = this.startNode();t && this.isContextual("static") && this.lookahead().type !== O.colon && (this.next(), o = !0);var p = this.flowParseVariance();if (this.match(O.bracketL)) r.indexers.push(this.flowParseObjectTypeIndexer(h, o, p));else if (this.match(O.parenL) || this.isRelational("<")) p && this.unexpected(p.start), r.callProperties.push(this.flowParseObjectTypeCallProperty(h, o));else {
								var c = "init";if (this.isContextual("get") || this.isContextual("set")) {
									var l = this.lookahead();l.type !== O.name && l.type !== O.string && l.type !== O.num || (c = this.state.value, this.next());
								}r.properties.push(this.flowParseObjectTypeProperty(h, o, p, c, s));
							}this.flowObjectTypeSemicolon();
						}this.expect(a);var u = this.finishNode(r, "ObjectTypeAnnotation");return this.state.inType = i, u;
					}, s.flowParseObjectTypeProperty = function (t, e, s, i, r) {
						if (this.match(O.ellipsis)) return r || this.unexpected(null, "Spread operator cannot appear in class or interface definitions"), s && this.unexpected(s.start, "Spread properties cannot have variance"), this.expect(O.ellipsis), t.argument = this.flowParseType(), this.finishNode(t, "ObjectTypeSpreadProperty");t.key = this.flowParseObjectPropertyKey(), t.static = e, t.kind = i;var a = !1;return this.isRelational("<") || this.match(O.parenL) ? (t.method = !0, s && this.unexpected(s.start), t.value = this.flowParseObjectTypeMethodish(this.startNodeAt(t.start, t.loc.start)), "get" !== i && "set" !== i || this.flowCheckGetterSetterParamCount(t)) : ("init" !== i && this.unexpected(), t.method = !1, this.eat(O.question) && (a = !0), t.value = this.flowParseTypeInitialiser(), t.variance = s), t.optional = a, this.finishNode(t, "ObjectTypeProperty");
					}, s.flowCheckGetterSetterParamCount = function (t) {
						var e = "get" === t.kind ? 0 : 1;if (t.value.params.length !== e) {
							var s = t.start;"get" === t.kind ? this.raise(s, "getter should have no params") : this.raise(s, "setter should have exactly one param");
						}
					}, s.flowObjectTypeSemicolon = function () {
						this.eat(O.semi) || this.eat(O.comma) || this.match(O.braceR) || this.match(O.braceBarR) || this.unexpected();
					}, s.flowParseQualifiedTypeIdentifier = function (t, e, s) {
						t = t || this.state.start, e = e || this.state.startLoc;for (var i = s || this.parseIdentifier(); this.eat(O.dot);) {
							var r = this.startNodeAt(t, e);r.qualification = i, r.id = this.parseIdentifier(), i = this.finishNode(r, "QualifiedTypeIdentifier");
						}return i;
					}, s.flowParseGenericType = function (t, e, s) {
						var i = this.startNodeAt(t, e);return i.typeParameters = null, i.id = this.flowParseQualifiedTypeIdentifier(t, e, s), this.isRelational("<") && (i.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(i, "GenericTypeAnnotation");
					}, s.flowParseTypeofType = function () {
						var t = this.startNode();return this.expect(O._typeof), t.argument = this.flowParsePrimaryType(), this.finishNode(t, "TypeofTypeAnnotation");
					}, s.flowParseTupleType = function () {
						var t = this.startNode();for (t.types = [], this.expect(O.bracketL); this.state.pos < this.input.length && !this.match(O.bracketR) && (t.types.push(this.flowParseType()), !this.match(O.bracketR));) {
							this.expect(O.comma);
						}return this.expect(O.bracketR), this.finishNode(t, "TupleTypeAnnotation");
					}, s.flowParseFunctionTypeParam = function () {
						var t = null,
						    e = !1,
						    s = null,
						    i = this.startNode(),
						    r = this.lookahead();return r.type === O.colon || r.type === O.question ? (t = this.parseIdentifier(), this.eat(O.question) && (e = !0), s = this.flowParseTypeInitialiser()) : s = this.flowParseType(), i.name = t, i.optional = e, i.typeAnnotation = s, this.finishNode(i, "FunctionTypeParam");
					}, s.reinterpretTypeAsFunctionTypeParam = function (t) {
						var e = this.startNodeAt(t.start, t.loc.start);return e.name = null, e.optional = !1, e.typeAnnotation = t, this.finishNode(e, "FunctionTypeParam");
					}, s.flowParseFunctionTypeParams = function (t) {
						void 0 === t && (t = []);for (var e = null; !this.match(O.parenR) && !this.match(O.ellipsis);) {
							t.push(this.flowParseFunctionTypeParam()), this.match(O.parenR) || this.expect(O.comma);
						}return this.eat(O.ellipsis) && (e = this.flowParseFunctionTypeParam()), { params: t, rest: e };
					}, s.flowIdentToTypeAnnotation = function (t, e, s, i) {
						switch (i.name) {case "any":
								return this.finishNode(s, "AnyTypeAnnotation");case "void":
								return this.finishNode(s, "VoidTypeAnnotation");case "bool":case "boolean":
								return this.finishNode(s, "BooleanTypeAnnotation");case "mixed":
								return this.finishNode(s, "MixedTypeAnnotation");case "empty":
								return this.finishNode(s, "EmptyTypeAnnotation");case "number":
								return this.finishNode(s, "NumberTypeAnnotation");case "string":
								return this.finishNode(s, "StringTypeAnnotation");default:
								return this.flowParseGenericType(t, e, i);}
					}, s.flowParsePrimaryType = function () {
						var t,
						    e,
						    s = this.state.start,
						    i = this.state.startLoc,
						    r = this.startNode(),
						    a = !1,
						    n = this.state.noAnonFunctionType;switch (this.state.type) {case O.name:
								return this.flowIdentToTypeAnnotation(s, i, r, this.parseIdentifier());case O.braceL:
								return this.flowParseObjectType(!1, !1, !0);case O.braceBarL:
								return this.flowParseObjectType(!1, !0, !0);case O.bracketL:
								return this.flowParseTupleType();case O.relational:
								if ("<" === this.state.value) return r.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(O.parenL), t = this.flowParseFunctionTypeParams(), r.params = t.params, r.rest = t.rest, this.expect(O.parenR), this.expect(O.arrow), r.returnType = this.flowParseType(), this.finishNode(r, "FunctionTypeAnnotation");break;case O.parenL:
								if (this.next(), !this.match(O.parenR) && !this.match(O.ellipsis)) if (this.match(O.name)) {
									var o = this.lookahead().type;a = o !== O.question && o !== O.colon;
								} else a = !0;if (a) {
									if (this.state.noAnonFunctionType = !1, e = this.flowParseType(), this.state.noAnonFunctionType = n, this.state.noAnonFunctionType || !(this.match(O.comma) || this.match(O.parenR) && this.lookahead().type === O.arrow)) return this.expect(O.parenR), e;this.eat(O.comma);
								}return t = e ? this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(e)]) : this.flowParseFunctionTypeParams(), r.params = t.params, r.rest = t.rest, this.expect(O.parenR), this.expect(O.arrow), r.returnType = this.flowParseType(), r.typeParameters = null, this.finishNode(r, "FunctionTypeAnnotation");case O.string:
								return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");case O._true:case O._false:
								return r.value = this.match(O._true), this.next(), this.finishNode(r, "BooleanLiteralTypeAnnotation");case O.plusMin:
								if ("-" === this.state.value) return this.next(), this.match(O.num) || this.unexpected(null, 'Unexpected token, expected "number"'), this.parseLiteral(-this.state.value, "NumberLiteralTypeAnnotation", r.start, r.loc.start);this.unexpected();case O.num:
								return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");case O._null:
								return this.next(), this.finishNode(r, "NullLiteralTypeAnnotation");case O._this:
								return this.next(), this.finishNode(r, "ThisTypeAnnotation");case O.star:
								return this.next(), this.finishNode(r, "ExistsTypeAnnotation");default:
								if ("typeof" === this.state.type.keyword) return this.flowParseTypeofType();}throw this.unexpected();
					}, s.flowParsePostfixType = function () {
						for (var t = this.state.start, e = this.state.startLoc, s = this.flowParsePrimaryType(); !this.canInsertSemicolon() && this.match(O.bracketL);) {
							var i = this.startNodeAt(t, e);i.elementType = s, this.expect(O.bracketL), this.expect(O.bracketR), s = this.finishNode(i, "ArrayTypeAnnotation");
						}return s;
					}, s.flowParsePrefixType = function () {
						var t = this.startNode();return this.eat(O.question) ? (t.typeAnnotation = this.flowParsePrefixType(), this.finishNode(t, "NullableTypeAnnotation")) : this.flowParsePostfixType();
					}, s.flowParseAnonFunctionWithoutParens = function () {
						var t = this.flowParsePrefixType();if (!this.state.noAnonFunctionType && this.eat(O.arrow)) {
							var e = this.startNodeAt(t.start, t.loc.start);return e.params = [this.reinterpretTypeAsFunctionTypeParam(t)], e.rest = null, e.returnType = this.flowParseType(), e.typeParameters = null, this.finishNode(e, "FunctionTypeAnnotation");
						}return t;
					}, s.flowParseIntersectionType = function () {
						var t = this.startNode();this.eat(O.bitwiseAND);var e = this.flowParseAnonFunctionWithoutParens();for (t.types = [e]; this.eat(O.bitwiseAND);) {
							t.types.push(this.flowParseAnonFunctionWithoutParens());
						}return 1 === t.types.length ? e : this.finishNode(t, "IntersectionTypeAnnotation");
					}, s.flowParseUnionType = function () {
						var t = this.startNode();this.eat(O.bitwiseOR);var e = this.flowParseIntersectionType();for (t.types = [e]; this.eat(O.bitwiseOR);) {
							t.types.push(this.flowParseIntersectionType());
						}return 1 === t.types.length ? e : this.finishNode(t, "UnionTypeAnnotation");
					}, s.flowParseType = function () {
						var t = this.state.inType;this.state.inType = !0;var e = this.flowParseUnionType();return this.state.inType = t, this.state.exprAllowed = this.state.exprAllowed || this.state.noAnonFunctionType, e;
					}, s.flowParseTypeAnnotation = function () {
						var t = this.startNode();return t.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(t, "TypeAnnotation");
					}, s.flowParseTypeAnnotatableIdentifier = function (t) {
						var e = t ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();return this.match(O.colon) && (e.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(e, e.type)), e;
					}, s.typeCastToParameter = function (t) {
						return t.expression.typeAnnotation = t.typeAnnotation, this.finishNodeAt(t.expression, t.expression.type, t.typeAnnotation.end, t.typeAnnotation.loc.end);
					}, s.flowParseVariance = function () {
						var t = null;return this.match(O.plusMin) && (t = this.startNode(), "+" === this.state.value ? t.kind = "plus" : t.kind = "minus", this.next(), this.finishNode(t, "Variance")), t;
					}, s.parseFunctionBody = function (e, s) {
						var i = this;return s ? this.forwardNoArrowParamsConversionAt(e, function () {
							return t.prototype.parseFunctionBody.call(i, e, !0);
						}) : t.prototype.parseFunctionBody.call(this, e, !1);
					}, s.parseFunctionBodyAndFinish = function (e, s, i) {
						if (!i && this.match(O.colon)) {
							var r = this.startNode(),
							    a = this.flowParseTypeAndPredicateInitialiser();r.typeAnnotation = a[0], e.predicate = a[1], e.returnType = r.typeAnnotation ? this.finishNode(r, "TypeAnnotation") : null;
						}t.prototype.parseFunctionBodyAndFinish.call(this, e, s, i);
					}, s.parseStatement = function (e, s) {
						if (this.state.strict && this.match(O.name) && "interface" === this.state.value) {
							var i = this.startNode();return this.next(), this.flowParseInterface(i);
						}return t.prototype.parseStatement.call(this, e, s);
					}, s.parseExpressionStatement = function (e, s) {
						if ("Identifier" === s.type) if ("declare" === s.name) {
							if (this.match(O._class) || this.match(O.name) || this.match(O._function) || this.match(O._var) || this.match(O._export)) return this.flowParseDeclare(e);
						} else if (this.match(O.name)) {
							if ("interface" === s.name) return this.flowParseInterface(e);if ("type" === s.name) return this.flowParseTypeAlias(e);if ("opaque" === s.name) return this.flowParseOpaqueType(e, !1);
						}return t.prototype.parseExpressionStatement.call(this, e, s);
					}, s.shouldParseExportDeclaration = function () {
						return this.isContextual("type") || this.isContextual("interface") || this.isContextual("opaque") || t.prototype.shouldParseExportDeclaration.call(this);
					}, s.isExportDefaultSpecifier = function () {
						return (!this.match(O.name) || "type" !== this.state.value && "interface" !== this.state.value && "opaque" != this.state.value) && t.prototype.isExportDefaultSpecifier.call(this);
					}, s.parseConditional = function (e, s, i, r, a) {
						var n = this;if (!this.match(O.question)) return e;if (a) {
							var o = this.state.clone();try {
								return t.prototype.parseConditional.call(this, e, s, i, r);
							} catch (t) {
								if (t instanceof SyntaxError) return this.state = o, a.start = t.pos || this.state.start, e;throw t;
							}
						}this.expect(O.question);var h = this.state.clone(),
						    p = this.state.noArrowAt,
						    c = this.startNodeAt(i, r),
						    l = this.tryParseConditionalConsequent(),
						    u = l.consequent,
						    d = l.failed,
						    f = this.getArrowLikeExpressions(u),
						    m = f[0],
						    y = f[1];if (d || y.length > 0) {
							var x = p.concat();if (y.length > 0) {
								this.state = h, this.state.noArrowAt = x;for (var v = 0; v < y.length; v++) {
									x.push(y[v].start);
								}var P = this.tryParseConditionalConsequent();u = P.consequent, d = P.failed;var g = this.getArrowLikeExpressions(u);m = g[0], y = g[1];
							}if (d && m.length > 1 && this.raise(h.start, "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate."), d && 1 === m.length) {
								this.state = h, this.state.noArrowAt = x.concat(m[0].start);var b = this.tryParseConditionalConsequent();u = b.consequent, d = b.failed;
							}this.getArrowLikeExpressions(u, !0);
						}return this.state.noArrowAt = p, this.expect(O.colon), c.test = e, c.consequent = u, c.alternate = this.forwardNoArrowParamsConversionAt(c, function () {
							return n.parseMaybeAssign(s, void 0, void 0, void 0);
						}), this.finishNode(c, "ConditionalExpression");
					}, s.tryParseConditionalConsequent = function () {
						this.state.noArrowParamsConversionAt.push(this.state.start);var t = this.parseMaybeAssign(),
						    e = !this.match(O.colon);return this.state.noArrowParamsConversionAt.pop(), { consequent: t, failed: e };
					}, s.getArrowLikeExpressions = function (e, s) {
						for (var i = this, r = [e], a = []; 0 !== r.length;) {
							var n = r.pop();"ArrowFunctionExpression" === n.type ? (n.typeParameters || !n.returnType ? (this.toAssignableList(n.params, !0, "arrow function parameters"), t.prototype.checkFunctionNameAndParams.call(this, n, !0)) : a.push(n), r.push(n.body)) : "ConditionalExpression" === n.type && (r.push(n.consequent), r.push(n.alternate));
						}if (s) {
							for (var o = 0; o < a.length; o++) {
								this.toAssignableList(e.params, !0, "arrow function parameters");
							}return [a, []];
						}return g(a, function (t) {
							try {
								return i.toAssignableList(t.params, !0, "arrow function parameters"), !0;
							} catch (t) {
								return !1;
							}
						});
					}, s.forwardNoArrowParamsConversionAt = function (t, e) {
						var s;return -1 !== this.state.noArrowParamsConversionAt.indexOf(t.start) ? (this.state.noArrowParamsConversionAt.push(this.state.start), s = e(), this.state.noArrowParamsConversionAt.pop()) : s = e(), s;
					}, s.parseParenItem = function (e, s, i) {
						if (e = t.prototype.parseParenItem.call(this, e, s, i), this.eat(O.question) && (e.optional = !0), this.match(O.colon)) {
							var r = this.startNodeAt(s, i);return r.expression = e, r.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(r, "TypeCastExpression");
						}return e;
					}, s.assertModuleNodeAllowed = function (e) {
						"ImportDeclaration" === e.type && ("type" === e.importKind || "typeof" === e.importKind) || "ExportNamedDeclaration" === e.type && "type" === e.exportKind || "ExportAllDeclaration" === e.type && "type" === e.exportKind || t.prototype.assertModuleNodeAllowed.call(this, e);
					}, s.parseExport = function (e) {
						return "ExportNamedDeclaration" !== (e = t.prototype.parseExport.call(this, e)).type && "ExportAllDeclaration" !== e.type || (e.exportKind = e.exportKind || "value"), e;
					}, s.parseExportDeclaration = function (e) {
						if (this.isContextual("type")) {
							e.exportKind = "type";var s = this.startNode();return this.next(), this.match(O.braceL) ? (e.specifiers = this.parseExportSpecifiers(), this.parseExportFrom(e), null) : this.flowParseTypeAlias(s);
						}if (this.isContextual("opaque")) {
							e.exportKind = "type";var i = this.startNode();return this.next(), this.flowParseOpaqueType(i, !1);
						}if (this.isContextual("interface")) {
							e.exportKind = "type";var r = this.startNode();return this.next(), this.flowParseInterface(r);
						}return t.prototype.parseExportDeclaration.call(this, e);
					}, s.shouldParseExportStar = function () {
						return t.prototype.shouldParseExportStar.call(this) || this.isContextual("type") && this.lookahead().type === O.star;
					}, s.parseExportStar = function (e) {
						return this.eatContextual("type") && (e.exportKind = "type"), t.prototype.parseExportStar.call(this, e);
					}, s.parseExportNamespace = function (e) {
						return "type" === e.exportKind && this.unexpected(), t.prototype.parseExportNamespace.call(this, e);
					}, s.parseClassId = function (e, s, i) {
						t.prototype.parseClassId.call(this, e, s, i), this.isRelational("<") && (e.typeParameters = this.flowParseTypeParameterDeclaration());
					}, s.isKeyword = function (e) {
						return (!this.state.inType || "void" !== e) && t.prototype.isKeyword.call(this, e);
					}, s.readToken = function (e) {
						var s = this.input.charCodeAt(this.state.pos + 1);return !this.state.inType || 62 !== e && 60 !== e ? p(e, s) ? (this.state.isIterator = !0, t.prototype.readWord.call(this, e)) : t.prototype.readToken.call(this, e) : this.finishOp(O.relational, 1);
					}, s.toAssignable = function (e, s, i) {
						return "TypeCastExpression" === e.type ? t.prototype.toAssignable.call(this, this.typeCastToParameter(e), s, i) : t.prototype.toAssignable.call(this, e, s, i);
					}, s.toAssignableList = function (e, s, i) {
						for (var r = 0; r < e.length; r++) {
							var a = e[r];a && "TypeCastExpression" === a.type && (e[r] = this.typeCastToParameter(a));
						}return t.prototype.toAssignableList.call(this, e, s, i);
					}, s.toReferencedList = function (t) {
						for (var e = 0; e < t.length; e++) {
							var s = t[e];s && s._exprListItem && "TypeCastExpression" === s.type && this.raise(s.start, "Unexpected type cast");
						}return t;
					}, s.parseExprListItem = function (e, s, i) {
						var r = this.startNode(),
						    a = t.prototype.parseExprListItem.call(this, e, s, i);return this.match(O.colon) ? (r._exprListItem = !0, r.expression = a, r.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(r, "TypeCastExpression")) : a;
					}, s.checkLVal = function (e, s, i, r) {
						if ("TypeCastExpression" !== e.type) return t.prototype.checkLVal.call(this, e, s, i, r);
					}, s.parseClassProperty = function (e) {
						return this.match(O.colon) && (e.typeAnnotation = this.flowParseTypeAnnotation()), t.prototype.parseClassProperty.call(this, e);
					}, s.isClassMethod = function () {
						return this.isRelational("<") || t.prototype.isClassMethod.call(this);
					}, s.isClassProperty = function () {
						return this.match(O.colon) || t.prototype.isClassProperty.call(this);
					}, s.isNonstaticConstructor = function (e) {
						return !this.match(O.colon) && t.prototype.isNonstaticConstructor.call(this, e);
					}, s.pushClassMethod = function (e, s, i, r, a) {
						s.variance && this.unexpected(s.variance.start), delete s.variance, this.isRelational("<") && (s.typeParameters = this.flowParseTypeParameterDeclaration()), t.prototype.pushClassMethod.call(this, e, s, i, r, a);
					}, s.pushClassPrivateMethod = function (e, s, i, r) {
						s.variance && this.unexpected(s.variance.start), delete s.variance, this.isRelational("<") && (s.typeParameters = this.flowParseTypeParameterDeclaration()), t.prototype.pushClassPrivateMethod.call(this, e, s, i, r);
					}, s.parseClassSuper = function (e) {
						if (t.prototype.parseClassSuper.call(this, e), e.superClass && this.isRelational("<") && (e.superTypeParameters = this.flowParseTypeParameterInstantiation()), this.isContextual("implements")) {
							this.next();var s = e.implements = [];do {
								var i = this.startNode();i.id = this.flowParseRestrictedIdentifier(!0), this.isRelational("<") ? i.typeParameters = this.flowParseTypeParameterInstantiation() : i.typeParameters = null, s.push(this.finishNode(i, "ClassImplements"));
							} while (this.eat(O.comma));
						}
					}, s.parsePropertyName = function (e) {
						var s = this.flowParseVariance(),
						    i = t.prototype.parsePropertyName.call(this, e);return e.variance = s, i;
					}, s.parseObjPropValue = function (e, s, i, r, a, n, o) {
						e.variance && this.unexpected(e.variance.start), delete e.variance;var h;this.isRelational("<") && (h = this.flowParseTypeParameterDeclaration(), this.match(O.parenL) || this.unexpected()), t.prototype.parseObjPropValue.call(this, e, s, i, r, a, n, o), h && ((e.value || e).typeParameters = h);
					}, s.parseAssignableListItemTypes = function (t) {
						if (this.eat(O.question)) {
							if ("Identifier" !== t.type) throw this.raise(t.start, "A binding pattern parameter cannot be optional in an implementation signature.");t.optional = !0;
						}return this.match(O.colon) && (t.typeAnnotation = this.flowParseTypeAnnotation()), this.finishNode(t, t.type), t;
					}, s.parseMaybeDefault = function (e, s, i) {
						var r = t.prototype.parseMaybeDefault.call(this, e, s, i);return "AssignmentPattern" === r.type && r.typeAnnotation && r.right.start < r.typeAnnotation.start && this.raise(r.typeAnnotation.start, "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`"), r;
					}, s.shouldParseDefaultImport = function (e) {
						return v(e) ? P(this.state) : t.prototype.shouldParseDefaultImport.call(this, e);
					}, s.parseImportSpecifierLocal = function (t, e, s, i) {
						e.local = v(t) ? this.flowParseRestrictedIdentifier(!0) : this.parseIdentifier(), this.checkLVal(e.local, !0, void 0, i), t.specifiers.push(this.finishNode(e, s));
					}, s.parseImportSpecifiers = function (e) {
						e.importKind = "value";var s = null;if (this.match(O._typeof) ? s = "typeof" : this.isContextual("type") && (s = "type"), s) {
							var i = this.lookahead();"type" === s && i.type === O.star && this.unexpected(i.start), (P(i) || i.type === O.braceL || i.type === O.star) && (this.next(), e.importKind = s);
						}t.prototype.parseImportSpecifiers.call(this, e);
					}, s.parseImportSpecifier = function (t) {
						var e = this.startNode(),
						    s = this.state.start,
						    i = this.parseIdentifier(!0),
						    r = null;"type" === i.name ? r = "type" : "typeof" === i.name && (r = "typeof");var a = !1;if (this.isContextual("as") && !this.isLookaheadContextual("as")) {
							var n = this.parseIdentifier(!0);null === r || this.match(O.name) || this.state.type.keyword ? (e.imported = i, e.importKind = null, e.local = this.parseIdentifier()) : (e.imported = n, e.importKind = r, e.local = n.__clone());
						} else null !== r && (this.match(O.name) || this.state.type.keyword) ? (e.imported = this.parseIdentifier(!0), e.importKind = r, this.eatContextual("as") ? e.local = this.parseIdentifier() : (a = !0, e.local = e.imported.__clone())) : (a = !0, e.imported = i, e.importKind = null, e.local = e.imported.__clone());var o = v(t),
						    h = v(e);o && h && this.raise(s, "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements"), (o || h) && this.checkReservedType(e.local.name, e.local.start), !a || o || h || this.checkReservedWord(e.local.name, e.start, !0, !0), this.checkLVal(e.local, !0, void 0, "import specifier"), t.specifiers.push(this.finishNode(e, "ImportSpecifier"));
					}, s.parseFunctionParams = function (e) {
						var s = e.kind;"get" !== s && "set" !== s && this.isRelational("<") && (e.typeParameters = this.flowParseTypeParameterDeclaration()), t.prototype.parseFunctionParams.call(this, e);
					}, s.parseVarHead = function (e) {
						t.prototype.parseVarHead.call(this, e), this.match(O.colon) && (e.id.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(e.id, e.id.type));
					}, s.parseAsyncArrowFromCallExpression = function (e, s) {
						if (this.match(O.colon)) {
							var i = this.state.noAnonFunctionType;this.state.noAnonFunctionType = !0, e.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = i;
						}return t.prototype.parseAsyncArrowFromCallExpression.call(this, e, s);
					}, s.shouldParseAsyncArrow = function () {
						return this.match(O.colon) || t.prototype.shouldParseAsyncArrow.call(this);
					}, s.parseMaybeAssign = function (e, s, i, r) {
						var a = this,
						    n = null;if (O.jsxTagStart && this.match(O.jsxTagStart)) {
							var o = this.state.clone();try {
								return t.prototype.parseMaybeAssign.call(this, e, s, i, r);
							} catch (t) {
								if (!(t instanceof SyntaxError)) throw t;this.state = o, this.state.context.length -= 2, n = t;
							}
						}if (null != n || this.isRelational("<")) {
							var h, p;try {
								p = this.flowParseTypeParameterDeclaration(), (h = this.forwardNoArrowParamsConversionAt(p, function () {
									return t.prototype.parseMaybeAssign.call(a, e, s, i, r);
								})).typeParameters = p, this.resetStartLocationFromNode(h, p);
							} catch (t) {
								throw n || t;
							}if ("ArrowFunctionExpression" === h.type) return h;if (null != n) throw n;this.raise(p.start, "Expected an arrow function after this type parameter declaration");
						}return t.prototype.parseMaybeAssign.call(this, e, s, i, r);
					}, s.parseArrow = function (e) {
						if (this.match(O.colon)) {
							var s = this.state.clone();try {
								var i = this.state.noAnonFunctionType;this.state.noAnonFunctionType = !0;var r = this.startNode(),
								    a = this.flowParseTypeAndPredicateInitialiser();r.typeAnnotation = a[0], e.predicate = a[1], this.state.noAnonFunctionType = i, this.canInsertSemicolon() && this.unexpected(), this.match(O.arrow) || this.unexpected(), e.returnType = r.typeAnnotation ? this.finishNode(r, "TypeAnnotation") : null;
							} catch (t) {
								if (!(t instanceof SyntaxError)) throw t;this.state = s;
							}
						}return t.prototype.parseArrow.call(this, e);
					}, s.shouldParseArrow = function () {
						return this.match(O.colon) || t.prototype.shouldParseArrow.call(this);
					}, s.setArrowFunctionParameters = function (e, s) {
						-1 !== this.state.noArrowParamsConversionAt.indexOf(e.start) ? e.params = s : t.prototype.setArrowFunctionParameters.call(this, e, s);
					}, s.checkFunctionNameAndParams = function (e, s) {
						if (!s || -1 === this.state.noArrowParamsConversionAt.indexOf(e.start)) return t.prototype.checkFunctionNameAndParams.call(this, e, s);
					}, s.parseParenAndDistinguishExpression = function (e) {
						return t.prototype.parseParenAndDistinguishExpression.call(this, e && -1 === this.state.noArrowAt.indexOf(this.state.start));
					}, s.parseSubscripts = function (e, s, i, r) {
						if ("Identifier" === e.type && "async" === e.name && -1 !== this.state.noArrowAt.indexOf(s)) {
							this.next();var a = this.startNodeAt(s, i);a.callee = e, a.arguments = this.parseCallExpressionArguments(O.parenR, !1), e = this.finishNode(a, "CallExpression");
						} else if ("Identifier" === e.type && "async" === e.name && this.isRelational("<")) {
							var n,
							    o = this.state.clone();try {
								var h = this.parseAsyncArrowWithTypeParameters(s, i);if (h) return h;
							} catch (t) {
								n = t;
							}this.state = o;try {
								return t.prototype.parseSubscripts.call(this, e, s, i, r);
							} catch (t) {
								throw n || t;
							}
						}return t.prototype.parseSubscripts.call(this, e, s, i, r);
					}, s.parseAsyncArrowWithTypeParameters = function (t, e) {
						var s = this.startNodeAt(t, e);if (this.parseFunctionParams(s), this.parseArrow(s)) return this.parseArrowExpression(s, void 0, !0);
					}, s.readToken_mult_modulo = function (e) {
						var s = this.input.charCodeAt(this.state.pos + 1);if (42 === e && 47 === s && this.state.hasFlowComment) return this.state.hasFlowComment = !1, this.state.pos += 2, void this.nextToken();t.prototype.readToken_mult_modulo.call(this, e);
					}, s.skipBlockComment = function () {
						if (this.hasPlugin("flow") && this.hasPlugin("flowComments") && this.skipFlowComment()) return this.hasFlowCommentCompletion(), this.state.pos += this.skipFlowComment(), void (this.state.hasFlowComment = !0);var e;if (this.hasPlugin("flow") && this.state.hasFlowComment) return -1 === (e = this.input.indexOf("*-/", this.state.pos += 2)) && this.raise(this.state.pos - 2, "Unterminated comment"), void (this.state.pos = e + 3);t.prototype.skipBlockComment.call(this);
					}, s.skipFlowComment = function () {
						var t = this.input.charCodeAt(this.state.pos + 2),
						    e = this.input.charCodeAt(this.state.pos + 3);return 58 === t && 58 === e ? 4 : "flow-include" === this.input.slice(this.state.pos + 2, 14) ? 14 : 58 === t && 58 !== e && 2;
					}, s.hasFlowCommentCompletion = function () {
						-1 === this.input.indexOf("*/", this.state.pos) && this.raise(this.state.pos, "Unterminated comment");
					}, e;
				}(t);
			}, pt.jsx = function (t) {
				return function (t) {
					function e() {
						return t.apply(this, arguments) || this;
					}r(e, t);var s = e.prototype;return s.jsxReadToken = function () {
						for (var t = "", e = this.state.pos;;) {
							this.state.pos >= this.input.length && this.raise(this.state.start, "Unterminated JSX contents");var s = this.input.charCodeAt(this.state.pos);switch (s) {case 60:case 123:
									return this.state.pos === this.state.start ? 60 === s && this.state.exprAllowed ? (++this.state.pos, this.finishToken(O.jsxTagStart)) : this.getTokenFromCode(s) : (t += this.input.slice(e, this.state.pos), this.finishToken(O.jsxText, t));case 38:
									t += this.input.slice(e, this.state.pos), t += this.jsxReadEntity(), e = this.state.pos;break;default:
									l(s) ? (t += this.input.slice(e, this.state.pos), t += this.jsxReadNewLine(!0), e = this.state.pos) : ++this.state.pos;}
						}
					}, s.jsxReadNewLine = function (t) {
						var e,
						    s = this.input.charCodeAt(this.state.pos);return ++this.state.pos, 13 === s && 10 === this.input.charCodeAt(this.state.pos) ? (++this.state.pos, e = t ? "\n" : "\r\n") : e = String.fromCharCode(s), ++this.state.curLine, this.state.lineStart = this.state.pos, e;
					}, s.jsxReadString = function (t) {
						for (var e = "", s = ++this.state.pos;;) {
							this.state.pos >= this.input.length && this.raise(this.state.start, "Unterminated string constant");var i = this.input.charCodeAt(this.state.pos);if (i === t) break;38 === i ? (e += this.input.slice(s, this.state.pos), e += this.jsxReadEntity(), s = this.state.pos) : l(i) ? (e += this.input.slice(s, this.state.pos), e += this.jsxReadNewLine(!1), s = this.state.pos) : ++this.state.pos;
						}return e += this.input.slice(s, this.state.pos++), this.finishToken(O.string, e);
					}, s.jsxReadEntity = function () {
						for (var t, e = "", s = 0, i = this.input[this.state.pos], r = ++this.state.pos; this.state.pos < this.input.length && s++ < 10;) {
							if (";" === (i = this.input[this.state.pos++])) {
								"#" === e[0] ? "x" === e[1] ? (e = e.substr(2), ft.test(e) && (t = String.fromCodePoint(parseInt(e, 16)))) : (e = e.substr(1), mt.test(e) && (t = String.fromCodePoint(parseInt(e, 10)))) : t = dt[e];break;
							}e += i;
						}return t || (this.state.pos = r, "&");
					}, s.jsxReadWord = function () {
						var t,
						    e = this.state.pos;do {
							t = this.input.charCodeAt(++this.state.pos);
						} while (c(t) || 45 === t);return this.finishToken(O.jsxName, this.input.slice(e, this.state.pos));
					}, s.jsxParseIdentifier = function () {
						var t = this.startNode();return this.match(O.jsxName) ? t.name = this.state.value : this.state.type.keyword ? t.name = this.state.type.keyword : this.unexpected(), this.next(), this.finishNode(t, "JSXIdentifier");
					}, s.jsxParseNamespacedName = function () {
						var t = this.state.start,
						    e = this.state.startLoc,
						    s = this.jsxParseIdentifier();if (!this.eat(O.colon)) return s;var i = this.startNodeAt(t, e);return i.namespace = s, i.name = this.jsxParseIdentifier(), this.finishNode(i, "JSXNamespacedName");
					}, s.jsxParseElementName = function () {
						for (var t = this.state.start, e = this.state.startLoc, s = this.jsxParseNamespacedName(); this.eat(O.dot);) {
							var i = this.startNodeAt(t, e);i.object = s, i.property = this.jsxParseIdentifier(), s = this.finishNode(i, "JSXMemberExpression");
						}return s;
					}, s.jsxParseAttributeValue = function () {
						var t;switch (this.state.type) {case O.braceL:
								if ("JSXEmptyExpression" === (t = this.jsxParseExpressionContainer()).expression.type) throw this.raise(t.start, "JSX attributes must only be assigned a non-empty expression");return t;case O.jsxTagStart:case O.string:
								return this.parseExprAtom();default:
								throw this.raise(this.state.start, "JSX value should be either an expression or a quoted JSX text");}
					}, s.jsxParseEmptyExpression = function () {
						var t = this.startNodeAt(this.state.lastTokEnd, this.state.lastTokEndLoc);return this.finishNodeAt(t, "JSXEmptyExpression", this.state.start, this.state.startLoc);
					}, s.jsxParseSpreadChild = function () {
						var t = this.startNode();return this.expect(O.braceL), this.expect(O.ellipsis), t.expression = this.parseExpression(), this.expect(O.braceR), this.finishNode(t, "JSXSpreadChild");
					}, s.jsxParseExpressionContainer = function () {
						var t = this.startNode();return this.next(), this.match(O.braceR) ? t.expression = this.jsxParseEmptyExpression() : t.expression = this.parseExpression(), this.expect(O.braceR), this.finishNode(t, "JSXExpressionContainer");
					}, s.jsxParseAttribute = function () {
						var t = this.startNode();return this.eat(O.braceL) ? (this.expect(O.ellipsis), t.argument = this.parseMaybeAssign(), this.expect(O.braceR), this.finishNode(t, "JSXSpreadAttribute")) : (t.name = this.jsxParseNamespacedName(), t.value = this.eat(O.eq) ? this.jsxParseAttributeValue() : null, this.finishNode(t, "JSXAttribute"));
					}, s.jsxParseOpeningElementAt = function (t, e) {
						var s = this.startNodeAt(t, e);if (this.match(O.jsxTagEnd)) return this.expect(O.jsxTagEnd), this.finishNode(s, "JSXOpeningFragment");for (s.attributes = [], s.name = this.jsxParseElementName(); !this.match(O.slash) && !this.match(O.jsxTagEnd);) {
							s.attributes.push(this.jsxParseAttribute());
						}return s.selfClosing = this.eat(O.slash), this.expect(O.jsxTagEnd), this.finishNode(s, "JSXOpeningElement");
					}, s.jsxParseClosingElementAt = function (t, e) {
						var s = this.startNodeAt(t, e);return this.match(O.jsxTagEnd) ? (this.expect(O.jsxTagEnd), this.finishNode(s, "JSXClosingFragment")) : (s.name = this.jsxParseElementName(), this.expect(O.jsxTagEnd), this.finishNode(s, "JSXClosingElement"));
					}, s.jsxParseElementAt = function (t, e) {
						var s = this.startNodeAt(t, e),
						    i = [],
						    r = this.jsxParseOpeningElementAt(t, e),
						    a = null;if (!r.selfClosing) {
							t: for (;;) {
								switch (this.state.type) {case O.jsxTagStart:
										if (t = this.state.start, e = this.state.startLoc, this.next(), this.eat(O.slash)) {
											a = this.jsxParseClosingElementAt(t, e);break t;
										}i.push(this.jsxParseElementAt(t, e));break;case O.jsxText:
										i.push(this.parseExprAtom());break;case O.braceL:
										this.lookahead().type === O.ellipsis ? i.push(this.jsxParseSpreadChild()) : i.push(this.jsxParseExpressionContainer());break;default:
										throw this.unexpected();}
							}b(r) && !b(a) ? this.raise(a.start, "Expected corresponding JSX closing tag for <>") : !b(r) && b(a) ? this.raise(a.start, "Expected corresponding JSX closing tag for <" + T(r.name) + ">") : b(r) || b(a) || T(a.name) !== T(r.name) && this.raise(a.start, "Expected corresponding JSX closing tag for <" + T(r.name) + ">");
						}return b(r) ? (s.openingFragment = r, s.closingFragment = a) : (s.openingElement = r, s.closingElement = a), s.children = i, this.match(O.relational) && "<" === this.state.value && this.raise(this.state.start, "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"), b(r) ? this.finishNode(s, "JSXFragment") : this.finishNode(s, "JSXElement");
					}, s.jsxParseElement = function () {
						var t = this.state.start,
						    e = this.state.startLoc;return this.next(), this.jsxParseElementAt(t, e);
					}, s.parseExprAtom = function (e) {
						return this.match(O.jsxText) ? this.parseLiteral(this.state.value, "JSXText") : this.match(O.jsxTagStart) ? this.jsxParseElement() : t.prototype.parseExprAtom.call(this, e);
					}, s.readToken = function (e) {
						if (this.state.inPropertyName) return t.prototype.readToken.call(this, e);var s = this.curContext();if (s === H.j_expr) return this.jsxReadToken();if (s === H.j_oTag || s === H.j_cTag) {
							if (h(e)) return this.jsxReadWord();if (62 === e) return ++this.state.pos, this.finishToken(O.jsxTagEnd);if ((34 === e || 39 === e) && s === H.j_oTag) return this.jsxReadString(e);
						}return 60 === e && this.state.exprAllowed ? (++this.state.pos, this.finishToken(O.jsxTagStart)) : t.prototype.readToken.call(this, e);
					}, s.updateContext = function (e) {
						if (this.match(O.braceL)) {
							var s = this.curContext();s === H.j_oTag ? this.state.context.push(H.braceExpression) : s === H.j_expr ? this.state.context.push(H.templateQuasi) : t.prototype.updateContext.call(this, e), this.state.exprAllowed = !0;
						} else {
							if (!this.match(O.slash) || e !== O.jsxTagStart) return t.prototype.updateContext.call(this, e);this.state.context.length -= 2, this.state.context.push(H.j_cTag), this.state.exprAllowed = !1;
						}
					}, e;
				}(t);
			}, pt.typescript = function (t) {
				return function (t) {
					function e() {
						return t.apply(this, arguments) || this;
					}r(e, t);var s = e.prototype;return s.tsIsIdentifier = function () {
						return this.match(O.name);
					}, s.tsNextTokenCanFollowModifier = function () {
						return this.next(), !(this.hasPrecedingLineBreak() || this.match(O.parenL) || this.match(O.colon) || this.match(O.eq) || this.match(O.question));
					}, s.tsParseModifier = function (t) {
						if (this.match(O.name)) {
							var e = this.state.value;return -1 !== t.indexOf(e) && this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)) ? e : void 0;
						}
					}, s.tsIsListTerminator = function (t) {
						switch (t) {case "EnumMembers":case "TypeMembers":
								return this.match(O.braceR);case "HeritageClauseElement":
								return this.match(O.braceL);case "TupleElementTypes":
								return this.match(O.bracketR);case "TypeParametersOrArguments":
								return this.isRelational(">");}throw new Error("Unreachable");
					}, s.tsParseList = function (t, e) {
						for (var s = []; !this.tsIsListTerminator(t);) {
							s.push(e());
						}return s;
					}, s.tsParseDelimitedList = function (t, e) {
						return w(this.tsParseDelimitedListWorker(t, e, !0));
					}, s.tsTryParseDelimitedList = function (t, e) {
						return this.tsParseDelimitedListWorker(t, e, !1);
					}, s.tsParseDelimitedListWorker = function (t, e, s) {
						for (var i = []; !this.tsIsListTerminator(t);) {
							var r = e();if (null == r) return;if (i.push(r), !this.eat(O.comma)) {
								if (this.tsIsListTerminator(t)) break;return void (s && this.expect(O.comma));
							}
						}return i;
					}, s.tsParseBracketedList = function (t, e, s, i) {
						i || (s ? this.expect(O.bracketL) : this.expectRelational("<"));var r = this.tsParseDelimitedList(t, e);return s ? this.expect(O.bracketR) : this.expectRelational(">"), r;
					}, s.tsParseEntityName = function (t) {
						for (var e = this.parseIdentifier(); this.eat(O.dot);) {
							var s = this.startNodeAtNode(e);s.left = e, s.right = this.parseIdentifier(t), e = this.finishNode(s, "TSQualifiedName");
						}return e;
					}, s.tsParseTypeReference = function () {
						var t = this.startNode();return t.typeName = this.tsParseEntityName(!1), !this.hasPrecedingLineBreak() && this.isRelational("<") && (t.typeParameters = this.tsParseTypeArguments()), this.finishNode(t, "TSTypeReference");
					}, s.tsParseThisTypePredicate = function (t) {
						this.next();var e = this.startNode();return e.parameterName = t, e.typeAnnotation = this.tsParseTypeAnnotation(!1), this.finishNode(e, "TSTypePredicate");
					}, s.tsParseThisTypeNode = function () {
						var t = this.startNode();return this.next(), this.finishNode(t, "TSThisType");
					}, s.tsParseTypeQuery = function () {
						var t = this.startNode();return this.expect(O._typeof), t.exprName = this.tsParseEntityName(!0), this.finishNode(t, "TSTypeQuery");
					}, s.tsParseTypeParameter = function () {
						var t = this.startNode();return t.name = this.parseIdentifierName(t.start), t.constraint = this.tsEatThenParseType(O._extends), t.default = this.tsEatThenParseType(O.eq), this.finishNode(t, "TSTypeParameter");
					}, s.tsTryParseTypeParameters = function () {
						if (this.isRelational("<")) return this.tsParseTypeParameters();
					}, s.tsParseTypeParameters = function () {
						var t = this.startNode();return this.isRelational("<") || this.match(O.jsxTagStart) ? this.next() : this.unexpected(), t.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this), !1, !0), this.finishNode(t, "TSTypeParameterDeclaration");
					}, s.tsFillSignature = function (t, e) {
						var s = t === O.arrow;e.typeParameters = this.tsTryParseTypeParameters(), this.expect(O.parenL), e.parameters = this.tsParseBindingListForSignature(), s ? e.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(t) : this.match(t) && (e.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(t));
					}, s.tsParseBindingListForSignature = function () {
						var t = this;return this.parseBindingList(O.parenR).map(function (e) {
							if ("Identifier" !== e.type && "RestElement" !== e.type) throw t.unexpected(e.start, "Name in a signature must be an Identifier.");return e;
						});
					}, s.tsParseTypeMemberSemicolon = function () {
						this.eat(O.comma) || this.semicolon();
					}, s.tsParseSignatureMember = function (t) {
						var e = this.startNode();return "TSConstructSignatureDeclaration" === t && this.expect(O._new), this.tsFillSignature(O.colon, e), this.tsParseTypeMemberSemicolon(), this.finishNode(e, t);
					}, s.tsIsUnambiguouslyIndexSignature = function () {
						return this.next(), this.eat(O.name) && this.match(O.colon);
					}, s.tsTryParseIndexSignature = function (t) {
						if (this.match(O.bracketL) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))) {
							this.expect(O.bracketL);var e = this.parseIdentifier();this.expect(O.colon), e.typeAnnotation = this.tsParseTypeAnnotation(!1), this.expect(O.bracketR), t.parameters = [e];var s = this.tsTryParseTypeAnnotation();return s && (t.typeAnnotation = s), this.tsParseTypeMemberSemicolon(), this.finishNode(t, "TSIndexSignature");
						}
					}, s.tsParsePropertyOrMethodSignature = function (t, e) {
						this.parsePropertyName(t), this.eat(O.question) && (t.optional = !0);var s = t;if (e || !this.match(O.parenL) && !this.isRelational("<")) {
							var i = s;e && (i.readonly = !0);var r = this.tsTryParseTypeAnnotation();return r && (i.typeAnnotation = r), this.tsParseTypeMemberSemicolon(), this.finishNode(i, "TSPropertySignature");
						}var a = s;return this.tsFillSignature(O.colon, a), this.tsParseTypeMemberSemicolon(), this.finishNode(a, "TSMethodSignature");
					}, s.tsParseTypeMember = function () {
						if (this.match(O.parenL) || this.isRelational("<")) return this.tsParseSignatureMember("TSCallSignatureDeclaration");if (this.match(O._new) && this.tsLookAhead(this.tsIsStartOfConstructSignature.bind(this))) return this.tsParseSignatureMember("TSConstructSignatureDeclaration");var t = this.startNode(),
						    e = !!this.tsParseModifier(["readonly"]),
						    s = this.tsTryParseIndexSignature(t);return s ? (e && (t.readonly = !0), s) : this.tsParsePropertyOrMethodSignature(t, e);
					}, s.tsIsStartOfConstructSignature = function () {
						return this.next(), this.match(O.parenL) || this.isRelational("<");
					}, s.tsParseTypeLiteral = function () {
						var t = this.startNode();return t.members = this.tsParseObjectTypeMembers(), this.finishNode(t, "TSTypeLiteral");
					}, s.tsParseObjectTypeMembers = function () {
						this.expect(O.braceL);var t = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));return this.expect(O.braceR), t;
					}, s.tsIsStartOfMappedType = function () {
						return this.next(), this.isContextual("readonly") && this.next(), !!this.match(O.bracketL) && (this.next(), !!this.tsIsIdentifier() && (this.next(), this.match(O._in)));
					}, s.tsParseMappedTypeParameter = function () {
						var t = this.startNode();return t.name = this.parseIdentifierName(t.start), t.constraint = this.tsExpectThenParseType(O._in), this.finishNode(t, "TSTypeParameter");
					}, s.tsParseMappedType = function () {
						var t = this.startNode();return this.expect(O.braceL), this.eatContextual("readonly") && (t.readonly = !0), this.expect(O.bracketL), t.typeParameter = this.tsParseMappedTypeParameter(), this.expect(O.bracketR), this.eat(O.question) && (t.optional = !0), t.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(O.braceR), this.finishNode(t, "TSMappedType");
					}, s.tsParseTupleType = function () {
						var t = this.startNode();return t.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseType.bind(this), !0, !1), this.finishNode(t, "TSTupleType");
					}, s.tsParseParenthesizedType = function () {
						var t = this.startNode();return this.expect(O.parenL), t.typeAnnotation = this.tsParseType(), this.expect(O.parenR), this.finishNode(t, "TSParenthesizedType");
					}, s.tsParseFunctionOrConstructorType = function (t) {
						var e = this.startNode();return "TSConstructorType" === t && this.expect(O._new), this.tsFillSignature(O.arrow, e), this.finishNode(e, t);
					}, s.tsParseLiteralTypeNode = function () {
						var t = this,
						    e = this.startNode();return e.literal = function () {
							switch (t.state.type) {case O.num:
									return t.parseLiteral(t.state.value, "NumericLiteral");case O.string:
									return t.parseLiteral(t.state.value, "StringLiteral");case O._true:case O._false:
									return t.parseBooleanLiteral();default:
									throw t.unexpected();}
						}(), this.finishNode(e, "TSLiteralType");
					}, s.tsParseNonArrayType = function () {
						switch (this.state.type) {case O.name:case O._void:case O._null:
								var t = this.match(O._void) ? "TSVoidKeyword" : this.match(O._null) ? "TSNullKeyword" : C(this.state.value);if (void 0 !== t && this.lookahead().type !== O.dot) {
									var e = this.startNode();return this.next(), this.finishNode(e, t);
								}return this.tsParseTypeReference();case O.string:case O.num:case O._true:case O._false:
								return this.tsParseLiteralTypeNode();case O.plusMin:
								if ("-" === this.state.value) {
									var s = this.startNode();if (this.next(), !this.match(O.num)) throw this.unexpected();return s.literal = this.parseLiteral(-this.state.value, "NumericLiteral", s.start, s.loc.start), this.finishNode(s, "TSLiteralType");
								}break;case O._this:
								var i = this.tsParseThisTypeNode();return this.isContextual("is") && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(i) : i;case O._typeof:
								return this.tsParseTypeQuery();case O.braceL:
								return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();case O.bracketL:
								return this.tsParseTupleType();case O.parenL:
								return this.tsParseParenthesizedType();}throw this.unexpected();
					}, s.tsParseArrayTypeOrHigher = function () {
						for (var t = this.tsParseNonArrayType(); !this.hasPrecedingLineBreak() && this.eat(O.bracketL);) {
							if (this.match(O.bracketR)) {
								var e = this.startNodeAtNode(t);e.elementType = t, this.expect(O.bracketR), t = this.finishNode(e, "TSArrayType");
							} else {
								var s = this.startNodeAtNode(t);s.objectType = t, s.indexType = this.tsParseType(), this.expect(O.bracketR), t = this.finishNode(s, "TSIndexedAccessType");
							}
						}return t;
					}, s.tsParseTypeOperator = function (t) {
						var e = this.startNode();return this.expectContextual(t), e.operator = t, e.typeAnnotation = this.tsParseTypeOperatorOrHigher(), this.finishNode(e, "TSTypeOperator");
					}, s.tsParseTypeOperatorOrHigher = function () {
						var t = this,
						    e = ["keyof", "unique"].find(function (e) {
							return t.isContextual(e);
						});return e ? this.tsParseTypeOperator(e) : this.tsParseArrayTypeOrHigher();
					}, s.tsParseUnionOrIntersectionType = function (t, e, s) {
						this.eat(s);var i = e();if (this.match(s)) {
							for (var r = [i]; this.eat(s);) {
								r.push(e());
							}var a = this.startNodeAtNode(i);a.types = r, i = this.finishNode(a, t);
						}return i;
					}, s.tsParseIntersectionTypeOrHigher = function () {
						return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), O.bitwiseAND);
					}, s.tsParseUnionTypeOrHigher = function () {
						return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), O.bitwiseOR);
					}, s.tsIsStartOfFunctionType = function () {
						return !!this.isRelational("<") || this.match(O.parenL) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
					}, s.tsSkipParameterStart = function () {
						return !(!this.match(O.name) && !this.match(O._this) || (this.next(), 0));
					}, s.tsIsUnambiguouslyStartOfFunctionType = function () {
						if (this.next(), this.match(O.parenR) || this.match(O.ellipsis)) return !0;if (this.tsSkipParameterStart()) {
							if (this.match(O.colon) || this.match(O.comma) || this.match(O.question) || this.match(O.eq)) return !0;if (this.match(O.parenR) && (this.next(), this.match(O.arrow))) return !0;
						}return !1;
					}, s.tsParseTypeOrTypePredicateAnnotation = function (t) {
						var e = this;return this.tsInType(function () {
							var s = e.startNode();e.expect(t);var i = e.tsIsIdentifier() && e.tsTryParse(e.tsParseTypePredicatePrefix.bind(e));if (!i) return e.tsParseTypeAnnotation(!1, s);var r = e.tsParseTypeAnnotation(!1),
							    a = e.startNodeAtNode(i);return a.parameterName = i, a.typeAnnotation = r, s.typeAnnotation = e.finishNode(a, "TSTypePredicate"), e.finishNode(s, "TSTypeAnnotation");
						});
					}, s.tsTryParseTypeOrTypePredicateAnnotation = function () {
						return this.match(O.colon) ? this.tsParseTypeOrTypePredicateAnnotation(O.colon) : void 0;
					}, s.tsTryParseTypeAnnotation = function () {
						return this.match(O.colon) ? this.tsParseTypeAnnotation() : void 0;
					}, s.tsTryParseType = function () {
						return this.tsEatThenParseType(O.colon);
					}, s.tsParseTypePredicatePrefix = function () {
						var t = this.parseIdentifier();if (this.isContextual("is") && !this.hasPrecedingLineBreak()) return this.next(), t;
					}, s.tsParseTypeAnnotation = function (t, e) {
						var s = this;return void 0 === t && (t = !0), void 0 === e && (e = this.startNode()), this.tsInType(function () {
							t && s.expect(O.colon), e.typeAnnotation = s.tsParseType();
						}), this.finishNode(e, "TSTypeAnnotation");
					}, s.tsParseType = function () {
						return A(this.state.inType), this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(O._new) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.tsParseUnionTypeOrHigher();
					}, s.tsParseTypeAssertion = function () {
						var t = this,
						    e = this.startNode();return e.typeAnnotation = this.tsInType(function () {
							return t.tsParseType();
						}), this.expectRelational(">"), e.expression = this.parseMaybeUnary(), this.finishNode(e, "TSTypeAssertion");
					}, s.tsTryParseTypeArgumentsInExpression = function () {
						var t = this;return this.tsTryParseAndCatch(function () {
							var e = t.tsParseTypeArguments();return t.expect(O.parenL), e;
						});
					}, s.tsParseHeritageClause = function () {
						return this.tsParseDelimitedList("HeritageClauseElement", this.tsParseExpressionWithTypeArguments.bind(this));
					}, s.tsParseExpressionWithTypeArguments = function () {
						var t = this.startNode();return t.expression = this.tsParseEntityName(!1), this.isRelational("<") && (t.typeParameters = this.tsParseTypeArguments()), this.finishNode(t, "TSExpressionWithTypeArguments");
					}, s.tsParseInterfaceDeclaration = function (t) {
						t.id = this.parseIdentifier(), t.typeParameters = this.tsTryParseTypeParameters(), this.eat(O._extends) && (t.extends = this.tsParseHeritageClause());var e = this.startNode();return e.body = this.tsParseObjectTypeMembers(), t.body = this.finishNode(e, "TSInterfaceBody"), this.finishNode(t, "TSInterfaceDeclaration");
					}, s.tsParseTypeAliasDeclaration = function (t) {
						return t.id = this.parseIdentifier(), t.typeParameters = this.tsTryParseTypeParameters(), t.typeAnnotation = this.tsExpectThenParseType(O.eq), this.semicolon(), this.finishNode(t, "TSTypeAliasDeclaration");
					}, s.tsInType = function (t) {
						var e = this.state.inType;this.state.inType = !0;try {
							return t();
						} finally {
							this.state.inType = e;
						}
					}, s.tsEatThenParseType = function (t) {
						return this.match(t) ? this.tsNextThenParseType() : void 0;
					}, s.tsExpectThenParseType = function (t) {
						var e = this;return this.tsDoThenParseType(function () {
							return e.expect(t);
						});
					}, s.tsNextThenParseType = function () {
						var t = this;return this.tsDoThenParseType(function () {
							return t.next();
						});
					}, s.tsDoThenParseType = function (t) {
						var e = this;return this.tsInType(function () {
							return t(), e.tsParseType();
						});
					}, s.tsParseEnumMember = function () {
						var t = this.startNode();return t.id = this.match(O.string) ? this.parseLiteral(this.state.value, "StringLiteral") : this.parseIdentifier(!0), this.eat(O.eq) && (t.initializer = this.parseMaybeAssign()), this.finishNode(t, "TSEnumMember");
					}, s.tsParseEnumDeclaration = function (t, e) {
						return e && (t.const = !0), t.id = this.parseIdentifier(), this.expect(O.braceL), t.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(O.braceR), this.finishNode(t, "TSEnumDeclaration");
					}, s.tsParseModuleBlock = function () {
						var t = this.startNode();return this.expect(O.braceL), this.parseBlockOrModuleBlockBody(t.body = [], void 0, !0, O.braceR), this.finishNode(t, "TSModuleBlock");
					}, s.tsParseModuleOrNamespaceDeclaration = function (t) {
						if (t.id = this.parseIdentifier(), this.eat(O.dot)) {
							var e = this.startNode();this.tsParseModuleOrNamespaceDeclaration(e), t.body = e;
						} else t.body = this.tsParseModuleBlock();return this.finishNode(t, "TSModuleDeclaration");
					}, s.tsParseAmbientExternalModuleDeclaration = function (t) {
						return this.isContextual("global") ? (t.global = !0, t.id = this.parseIdentifier()) : this.match(O.string) ? t.id = this.parseExprAtom() : this.unexpected(), this.match(O.braceL) ? t.body = this.tsParseModuleBlock() : this.semicolon(), this.finishNode(t, "TSModuleDeclaration");
					}, s.tsParseImportEqualsDeclaration = function (t, e) {
						return t.isExport = e || !1, t.id = this.parseIdentifier(), this.expect(O.eq), t.moduleReference = this.tsParseModuleReference(), this.semicolon(), this.finishNode(t, "TSImportEqualsDeclaration");
					}, s.tsIsExternalModuleReference = function () {
						return this.isContextual("require") && this.lookahead().type === O.parenL;
					}, s.tsParseModuleReference = function () {
						return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1);
					}, s.tsParseExternalModuleReference = function () {
						var t = this.startNode();if (this.expectContextual("require"), this.expect(O.parenL), !this.match(O.string)) throw this.unexpected();return t.expression = this.parseLiteral(this.state.value, "StringLiteral"), this.expect(O.parenR), this.finishNode(t, "TSExternalModuleReference");
					}, s.tsLookAhead = function (t) {
						var e = this.state.clone(),
						    s = t();return this.state = e, s;
					}, s.tsTryParseAndCatch = function (t) {
						var e = this.state.clone();try {
							return t();
						} catch (t) {
							if (t instanceof SyntaxError) return void (this.state = e);throw t;
						}
					}, s.tsTryParse = function (t) {
						var e = this.state.clone(),
						    s = t();return void 0 !== s && !1 !== s ? s : void (this.state = e);
					}, s.nodeWithSamePosition = function (t, e) {
						var s = this.startNodeAtNode(t);return s.type = e, s.end = t.end, s.loc.end = t.loc.end, t.leadingComments && (s.leadingComments = t.leadingComments), t.trailingComments && (s.trailingComments = t.trailingComments), t.innerComments && (s.innerComments = t.innerComments), s;
					}, s.tsTryParseDeclare = function (t) {
						switch (this.state.type) {case O._function:
								return this.next(), this.parseFunction(t, !0);case O._class:
								return this.parseClass(t, !0, !1);case O._const:
								if (this.match(O._const) && this.isLookaheadContextual("enum")) return this.expect(O._const), this.expectContextual("enum"), this.tsParseEnumDeclaration(t, !0);case O._var:case O._let:
								return this.parseVarStatement(t, this.state.type);case O.name:
								var e = this.state.value;return "global" === e ? this.tsParseAmbientExternalModuleDeclaration(t) : this.tsParseDeclaration(t, e, !0);}
					}, s.tsTryParseExportDeclaration = function () {
						return this.tsParseDeclaration(this.startNode(), this.state.value, !0);
					}, s.tsParseExpressionStatement = function (t, e) {
						switch (e.name) {case "declare":
								var s = this.tsTryParseDeclare(t);if (s) return s.declare = !0, s;break;case "global":
								if (this.match(O.braceL)) {
									var i = t;return i.global = !0, i.id = e, i.body = this.tsParseModuleBlock(), this.finishNode(i, "TSModuleDeclaration");
								}break;default:
								return this.tsParseDeclaration(t, e.name, !1);}
					}, s.tsParseDeclaration = function (t, e, s) {
						switch (e) {case "abstract":
								if (s || this.match(O._class)) {
									var i = t;return i.abstract = !0, s && this.next(), this.parseClass(i, !0, !1);
								}break;case "enum":
								if (s || this.match(O.name)) return s && this.next(), this.tsParseEnumDeclaration(t, !1);break;case "interface":
								if (s || this.match(O.name)) return s && this.next(), this.tsParseInterfaceDeclaration(t);break;case "module":
								if (s && this.next(), this.match(O.string)) return this.tsParseAmbientExternalModuleDeclaration(t);if (s || this.match(O.name)) return this.tsParseModuleOrNamespaceDeclaration(t);break;case "namespace":
								if (s || this.match(O.name)) return s && this.next(), this.tsParseModuleOrNamespaceDeclaration(t);break;case "type":
								if (s || this.match(O.name)) return s && this.next(), this.tsParseTypeAliasDeclaration(t);}
					}, s.tsTryParseGenericAsyncArrowFunction = function (e, s) {
						var i = this,
						    r = this.tsTryParseAndCatch(function () {
							var r = i.startNodeAt(e, s);return r.typeParameters = i.tsParseTypeParameters(), t.prototype.parseFunctionParams.call(i, r), r.returnType = i.tsTryParseTypeOrTypePredicateAnnotation(), i.expect(O.arrow), r;
						});if (r) return r.id = null, r.generator = !1, r.expression = !0, r.async = !0, this.parseFunctionBody(r, !0), this.finishNode(r, "ArrowFunctionExpression");
					}, s.tsParseTypeArguments = function () {
						var t = this,
						    e = this.startNode();return e.params = this.tsInType(function () {
							return t.expectRelational("<"), t.tsParseDelimitedList("TypeParametersOrArguments", t.tsParseType.bind(t));
						}), this.expectRelational(">"), this.finishNode(e, "TSTypeParameterInstantiation");
					}, s.tsIsDeclarationStart = function () {
						if (this.match(O.name)) switch (this.state.value) {case "abstract":case "declare":case "enum":case "interface":case "module":case "namespace":case "type":
								return !0;}return !1;
					}, s.isExportDefaultSpecifier = function () {
						return !this.tsIsDeclarationStart() && t.prototype.isExportDefaultSpecifier.call(this);
					}, s.parseAssignableListItem = function (t, e) {
						var s,
						    i = !1;t && (s = this.parseAccessModifier(), i = !!this.tsParseModifier(["readonly"]));var r = this.parseMaybeDefault();this.parseAssignableListItemTypes(r);var a = this.parseMaybeDefault(r.start, r.loc.start, r);if (s || i) {
							var n = this.startNodeAtNode(a);if (e.length && (n.decorators = e), s && (n.accessibility = s), i && (n.readonly = i), "Identifier" !== a.type && "AssignmentPattern" !== a.type) throw this.raise(n.start, "A parameter property may not be declared using a binding pattern.");return n.parameter = a, this.finishNode(n, "TSParameterProperty");
						}return e.length && (r.decorators = e), a;
					}, s.parseFunctionBodyAndFinish = function (e, s, i) {
						!i && this.match(O.colon) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(O.colon));var r = "FunctionDeclaration" === s ? "TSDeclareFunction" : "ClassMethod" === s ? "TSDeclareMethod" : void 0;r && !this.match(O.braceL) && this.isLineTerminator() ? this.finishNode(e, r) : t.prototype.parseFunctionBodyAndFinish.call(this, e, s, i);
					}, s.parseSubscript = function (e, s, i, r, a) {
						if (!this.hasPrecedingLineBreak() && this.eat(O.bang)) {
							var n = this.startNodeAt(s, i);return n.expression = e, this.finishNode(n, "TSNonNullExpression");
						}if (!r && this.isRelational("<")) {
							if (this.atPossibleAsync(e)) {
								var o = this.tsTryParseGenericAsyncArrowFunction(s, i);if (o) return o;
							}var h = this.startNodeAt(s, i);h.callee = e;var p = this.tsTryParseTypeArgumentsInExpression();if (p) return h.arguments = this.parseCallExpressionArguments(O.parenR, !1), h.typeParameters = p, this.finishCallExpression(h);
						}return t.prototype.parseSubscript.call(this, e, s, i, r, a);
					}, s.parseNewArguments = function (e) {
						var s = this;if (this.isRelational("<")) {
							var i = this.tsTryParseAndCatch(function () {
								var t = s.tsParseTypeArguments();return s.match(O.parenL) || s.unexpected(), t;
							});i && (e.typeParameters = i);
						}t.prototype.parseNewArguments.call(this, e);
					}, s.parseExprOp = function (e, s, i, r, a) {
						if (w(O._in.binop) > r && !this.hasPrecedingLineBreak() && this.isContextual("as")) {
							var n = this.startNodeAt(s, i);return n.expression = e, n.typeAnnotation = this.tsNextThenParseType(), this.finishNode(n, "TSAsExpression"), this.parseExprOp(n, s, i, r, a);
						}return t.prototype.parseExprOp.call(this, e, s, i, r, a);
					}, s.checkReservedWord = function (t, e, s, i) {}, s.checkDuplicateExports = function () {}, s.parseImport = function (e) {
						return this.match(O.name) && this.lookahead().type === O.eq ? this.tsParseImportEqualsDeclaration(e) : t.prototype.parseImport.call(this, e);
					}, s.parseExport = function (e) {
						if (this.match(O._import)) return this.expect(O._import), this.tsParseImportEqualsDeclaration(e, !0);if (this.eat(O.eq)) {
							var s = e;return s.expression = this.parseExpression(), this.semicolon(), this.finishNode(s, "TSExportAssignment");
						}if (this.eatContextual("as")) {
							var i = e;return this.expectContextual("namespace"), i.id = this.parseIdentifier(), this.semicolon(), this.finishNode(i, "TSNamespaceExportDeclaration");
						}return t.prototype.parseExport.call(this, e);
					}, s.parseExportDefaultExpression = function () {
						if (this.isContextual("abstract") && this.lookahead().type === O._class) {
							var e = this.startNode();return this.next(), this.parseClass(e, !0, !0), e.abstract = !0, e;
						}return t.prototype.parseExportDefaultExpression.call(this);
					}, s.parseStatementContent = function (e, s) {
						if (this.state.type === O._const) {
							var i = this.lookahead();if (i.type === O.name && "enum" === i.value) {
								var r = this.startNode();return this.expect(O._const), this.expectContextual("enum"), this.tsParseEnumDeclaration(r, !0);
							}
						}return t.prototype.parseStatementContent.call(this, e, s);
					}, s.parseAccessModifier = function () {
						return this.tsParseModifier(["public", "protected", "private"]);
					}, s.parseClassMember = function (e, s, i) {
						var r = this.parseAccessModifier();r && (s.accessibility = r), t.prototype.parseClassMember.call(this, e, s, i);
					}, s.parseClassMemberWithIsStatic = function (e, s, i, r) {
						var a = s,
						    n = s,
						    o = s,
						    h = !1,
						    p = !1;switch (this.tsParseModifier(["abstract", "readonly"])) {case "readonly":
								p = !0, h = !!this.tsParseModifier(["abstract"]);break;case "abstract":
								h = !0, p = !!this.tsParseModifier(["readonly"]);}if (h && (a.abstract = !0), p && (o.readonly = !0), !h && !r && !a.accessibility) {
							var c = this.tsTryParseIndexSignature(s);if (c) return void e.body.push(c);
						}if (p) return a.static = r, this.parseClassPropertyName(n), this.parsePostMemberNameModifiers(a), void this.pushClassProperty(e, n);t.prototype.parseClassMemberWithIsStatic.call(this, e, s, i, r);
					}, s.parsePostMemberNameModifiers = function (t) {
						this.eat(O.question) && (t.optional = !0);
					}, s.parseExpressionStatement = function (e, s) {
						return ("Identifier" === s.type ? this.tsParseExpressionStatement(e, s) : void 0) || t.prototype.parseExpressionStatement.call(this, e, s);
					}, s.shouldParseExportDeclaration = function () {
						return !!this.tsIsDeclarationStart() || t.prototype.shouldParseExportDeclaration.call(this);
					}, s.parseConditional = function (e, s, i, r, a) {
						if (!a || !this.match(O.question)) return t.prototype.parseConditional.call(this, e, s, i, r, a);var n = this.state.clone();try {
							return t.prototype.parseConditional.call(this, e, s, i, r);
						} catch (t) {
							if (!(t instanceof SyntaxError)) throw t;return this.state = n, a.start = t.pos || this.state.start, e;
						}
					}, s.parseParenItem = function (e, s, i) {
						if (e = t.prototype.parseParenItem.call(this, e, s, i), this.eat(O.question) && (e.optional = !0), this.match(O.colon)) {
							var r = this.startNodeAt(s, i);return r.expression = e, r.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(r, "TSTypeCastExpression");
						}return e;
					}, s.parseExportDeclaration = function (e) {
						var s,
						    i = this.eatContextual("declare");return this.match(O.name) && (s = this.tsTryParseExportDeclaration()), s || (s = t.prototype.parseExportDeclaration.call(this, e)), s && i && (s.declare = !0), s;
					}, s.parseClassId = function (e, s, i) {
						var r;if (s && !i || !this.isContextual("implements")) {
							(r = t.prototype.parseClassId).call.apply(r, [this].concat(Array.prototype.slice.call(arguments)));var a = this.tsTryParseTypeParameters();a && (e.typeParameters = a);
						}
					}, s.parseClassProperty = function (e) {
						var s = this.tsTryParseTypeAnnotation();return s && (e.typeAnnotation = s), t.prototype.parseClassProperty.call(this, e);
					}, s.pushClassMethod = function (e, s, i, r, a) {
						var n = this.tsTryParseTypeParameters();n && (s.typeParameters = n), t.prototype.pushClassMethod.call(this, e, s, i, r, a);
					}, s.pushClassPrivateMethod = function (e, s, i, r) {
						var a = this.tsTryParseTypeParameters();a && (s.typeParameters = a), t.prototype.pushClassPrivateMethod.call(this, e, s, i, r);
					}, s.parseClassSuper = function (e) {
						t.prototype.parseClassSuper.call(this, e), e.superClass && this.isRelational("<") && (e.superTypeParameters = this.tsParseTypeArguments()), this.eatContextual("implements") && (e.implements = this.tsParseHeritageClause());
					}, s.parseObjPropValue = function (e) {
						var s;if (this.isRelational("<")) throw new Error("TODO");for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) {
							r[a - 1] = arguments[a];
						}(s = t.prototype.parseObjPropValue).call.apply(s, [this, e].concat(r));
					}, s.parseFunctionParams = function (e, s) {
						var i = this.tsTryParseTypeParameters();i && (e.typeParameters = i), t.prototype.parseFunctionParams.call(this, e, s);
					}, s.parseVarHead = function (e) {
						t.prototype.parseVarHead.call(this, e);var s = this.tsTryParseTypeAnnotation();s && (e.id.typeAnnotation = s, this.finishNode(e.id, e.id.type));
					}, s.parseAsyncArrowFromCallExpression = function (e, s) {
						return this.match(O.colon) && (e.returnType = this.tsParseTypeAnnotation()), t.prototype.parseAsyncArrowFromCallExpression.call(this, e, s);
					}, s.parseMaybeAssign = function () {
						for (var e, s = arguments.length, i = new Array(s), r = 0; r < s; r++) {
							i[r] = arguments[r];
						}if (this.match(O.jsxTagStart)) {
							A(this.curContext() === H.j_oTag), A(this.state.context[this.state.context.length - 2] === H.j_expr);var a = this.state.clone();try {
								var n;return (n = t.prototype.parseMaybeAssign).call.apply(n, [this].concat(i));
							} catch (t) {
								if (!(t instanceof SyntaxError)) throw t;this.state = a, A(this.curContext() === H.j_oTag), this.state.context.pop(), A(this.curContext() === H.j_expr), this.state.context.pop(), e = t;
							}
						}if (void 0 === e && !this.isRelational("<")) {
							var o;return (o = t.prototype.parseMaybeAssign).call.apply(o, [this].concat(i));
						}var h,
						    p,
						    c = this.state.clone();try {
							var l;p = this.tsParseTypeParameters(), "ArrowFunctionExpression" !== (h = (l = t.prototype.parseMaybeAssign).call.apply(l, [this].concat(i))).type && this.unexpected();
						} catch (s) {
							var u;if (!(s instanceof SyntaxError)) throw s;if (e) throw e;return A(!this.hasPlugin("jsx")), this.state = c, (u = t.prototype.parseMaybeAssign).call.apply(u, [this].concat(i));
						}return p && 0 !== p.params.length && this.resetStartLocationFromNode(h, p.params[0]), h.typeParameters = p, h;
					}, s.parseMaybeUnary = function (e) {
						return !this.hasPlugin("jsx") && this.eatRelational("<") ? this.tsParseTypeAssertion() : t.prototype.parseMaybeUnary.call(this, e);
					}, s.parseArrow = function (e) {
						if (this.match(O.colon)) {
							var s = this.state.clone();try {
								var i = this.tsParseTypeOrTypePredicateAnnotation(O.colon);this.canInsertSemicolon() && this.unexpected(), this.match(O.arrow) || this.unexpected(), e.returnType = i;
							} catch (t) {
								if (!(t instanceof SyntaxError)) throw t;this.state = s;
							}
						}return t.prototype.parseArrow.call(this, e);
					}, s.parseAssignableListItemTypes = function (t) {
						if (this.eat(O.question)) {
							if ("Identifier" !== t.type) throw this.raise(t.start, "A binding pattern parameter cannot be optional in an implementation signature.");t.optional = !0;
						}var e = this.tsTryParseTypeAnnotation();return e && (t.typeAnnotation = e), this.finishNode(t, t.type);
					}, s.toAssignable = function (e, s, i) {
						switch (e.type) {case "TSTypeCastExpression":
								return t.prototype.toAssignable.call(this, this.typeCastToParameter(e), s, i);case "TSParameterProperty":
								return t.prototype.toAssignable.call(this, e, s, i);case "TSAsExpression":
								return e.expression = this.toAssignable(e.expression, s, i), e;default:
								return t.prototype.toAssignable.call(this, e, s, i);}
					}, s.checkLVal = function (e, s, i, r) {
						switch (e.type) {case "TSTypeCastExpression":
								return;case "TSParameterProperty":
								return void this.checkLVal(e.parameter, s, i, "parameter property");case "TSAsExpression":
								return void this.checkLVal(e.expression, s, i, r);default:
								return void t.prototype.checkLVal.call(this, e, s, i, r);}
					}, s.parseBindingAtom = function () {
						switch (this.state.type) {case O._this:
								return this.parseIdentifier(!0);default:
								return t.prototype.parseBindingAtom.call(this);}
					}, s.isClassMethod = function () {
						return this.isRelational("<") || t.prototype.isClassMethod.call(this);
					}, s.isClassProperty = function () {
						return this.match(O.colon) || t.prototype.isClassProperty.call(this);
					}, s.parseMaybeDefault = function () {
						for (var e, s = arguments.length, i = new Array(s), r = 0; r < s; r++) {
							i[r] = arguments[r];
						}var a = (e = t.prototype.parseMaybeDefault).call.apply(e, [this].concat(i));return "AssignmentPattern" === a.type && a.typeAnnotation && a.right.start < a.typeAnnotation.start && this.raise(a.typeAnnotation.start, "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`"), a;
					}, s.readToken = function (e) {
						return !this.state.inType || 62 !== e && 60 !== e ? t.prototype.readToken.call(this, e) : this.finishOp(O.relational, 1);
					}, s.toAssignableList = function (e, s, i) {
						for (var r = 0; r < e.length; r++) {
							var a = e[r];a && "TSTypeCastExpression" === a.type && (e[r] = this.typeCastToParameter(a));
						}return t.prototype.toAssignableList.call(this, e, s, i);
					}, s.typeCastToParameter = function (t) {
						return t.expression.typeAnnotation = t.typeAnnotation, this.finishNodeAt(t.expression, t.expression.type, t.typeAnnotation.end, t.typeAnnotation.loc.end);
					}, s.toReferencedList = function (t) {
						for (var e = 0; e < t.length; e++) {
							var s = t[e];s && s._exprListItem && "TsTypeCastExpression" === s.type && this.raise(s.start, "Did not expect a type annotation here.");
						}return t;
					}, s.shouldParseArrow = function () {
						return this.match(O.colon) || t.prototype.shouldParseArrow.call(this);
					}, s.shouldParseAsyncArrow = function () {
						return this.match(O.colon) || t.prototype.shouldParseAsyncArrow.call(this);
					}, e;
				}(t);
			};var yt = {};e.parse = function (t, e) {
				if (!e || "unambiguous" !== e.sourceType) return E(e, t).parse();e = Object.assign({}, e);try {
					e.sourceType = "module";var s = E(e, t).parse();return k(s) || (s.program.sourceType = "script"), s;
				} catch (s) {
					try {
						return e.sourceType = "script", E(e, t).parse();
					} catch (t) {}throw s;
				}
			}, e.parseExpression = function (t, e) {
				var s = E(e, t);return s.options.strictMode && (s.state.strict = !0), s.getExpression();
			}, e.tokTypes = O;
		});unwrapExports$$1(lib);var parserBabylon = parse;module.exports = parserBabylon;
	});

	var parserBabylon = unwrapExports(parserBabylon_1);

	return parserBabylon;
}();
