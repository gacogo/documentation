(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{382:function(t,a,s){t.exports=s.p+"assets/img/remote-presence-fig.b98ed1a2.svg"},446:function(t,a,s){"use strict";s.r(a);var e=s(44),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"far-remotable-and-marshaling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#far-remotable-and-marshaling"}},[t._v("#")]),t._v(" "),e("code",[t._v("Far()")]),t._v(", Remotable, and Marshaling")]),t._v(" "),e("p",[t._v("To export objects such as from our "),e("RouterLink",{attrs:{to:"/guides/js-programming/hardened-js.html#counter-example"}},[t._v("counter example")]),t._v("\nto make them available to other vats, mark them as "),e("em",[t._v("remotable")]),t._v(" using "),e("a",{attrs:{href:"#far-api"}},[t._v("Far")]),t._v(":")],1),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Far"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" passStyleOf "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@endo/marshal'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("makeCounter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Far")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'counter'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("incr")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("decr")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" publicFacet "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Far")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'makeCounter'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" makeCounter "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("passStyleOf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publicFacet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'remotable'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),e("h2",{attrs:{id:"marshaling-by-copy-or-by-presence"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#marshaling-by-copy-or-by-presence"}},[t._v("#")]),t._v(" Marshaling by Copy or by Presence")]),t._v(" "),e("p",[t._v("Recall that the first step in an "),e("RouterLink",{attrs:{to:"/guides/js-programming/eventual-send.html#eventual-send"}},[t._v("eventual send")]),t._v(" is\nto "),e("em",[t._v("marshal")]),t._v(" the method name and structured arguments; that is: to make them into a single string.\nThis is like "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON.stringify"),e("OutboundLink")],1),t._v(" but it can handle values such as "),e("code",[t._v("undefined")]),t._v(" and "),e("code",[t._v("BigInt")]),t._v("s.\nAlso, while many forms of data are copied between vats,\nremotables are marshalled so that they become remote "),e("em",[t._v("presences")]),t._v(" when unmarshaled:")],1),t._v(" "),e("p",[e("img",{attrs:{src:s(382),alt:"counter remote presence"}})]),t._v(" "),e("p",[t._v("Then another vat can make and use the exported counters:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" counter "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publicFacet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeCounter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("counter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("incr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),e("h2",{attrs:{id:"pass-styles-and-harden"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pass-styles-and-harden"}},[t._v("#")]),t._v(" Pass Styles and "),e("code",[t._v("harden")])]),t._v(" "),e("p",[t._v("Calls to remote presences must only contain "),e("em",[t._v("passable")]),t._v(" arguments and return "),e("em",[t._v("passable")]),t._v(" results.\nThere are three kinds of passables:")]),t._v(" "),e("ul",[e("li",[t._v("Remotables: objects with methods that can be called using "),e("code",[t._v("E()")]),t._v(" eventual send notation")]),t._v(" "),e("li",[t._v("Pass-by-copy data, such as numbers or hardened structures")]),t._v(" "),e("li",[t._v("Promises for passables")])]),t._v(" "),e("p",[t._v("Every object exported from a smart contract, such a "),e("code",[t._v("publicFacet")]),t._v(" or\n"),e("code",[t._v("creatorFacet")]),t._v(", must be passable. All objects used in your contract's external API must\nbe passable. All passables must be hardened.")]),t._v(" "),e("p",[t._v("Consider what might happen if we had a remote "),e("code",[t._v("item")]),t._v(" and we did not harden\nsome pass-by-copy data that we passed to it:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" amount1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" brand"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" brand1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10n")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPrice")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Throws, but let's imagine it doesn't.")]),t._v("\namount1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20n")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Now "),e("code",[t._v("amount1")]),t._v(" is supposedly both in the local and the remote vat, but the "),e("code",[t._v("value")]),t._v("\nis "),e("code",[t._v("20n")]),t._v(" in the local vat but "),e("code",[t._v("10n")]),t._v(" in the remote vat. (Worse: the remote vat\nmight be the same as the local vat.) Requiring "),e("code",[t._v("harden()")]),t._v(" for pass-by-copy\ndata leads to behavior across vats that is straightforward to reason about.")]),t._v(" "),e("h3",{attrs:{id:"passstyleof-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#passstyleof-api"}},[t._v("#")]),t._v(" "),e("code",[t._v("passStyleOf")]),t._v(" API")]),t._v(" "),e("p",[e("code",[t._v("passStyleOf(passable)")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("passable")]),t._v(" "),e("code",[t._v("{Passable}")])]),t._v(" "),e("li",[t._v("Returns: "),e("code",[t._v("{PassStyle}")])])]),t._v(" "),e("p",[t._v("A Passable is a value that may be marshalled. It is classified as one of\nPassStyle. A Passable must be hardened.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("PassStyle")]),t._v("s are:")]),t._v(" "),e("ul",[e("li",[t._v("the atomic pass-by-copy primitives ("),e("code",[t._v('"undefined" | "null" | "boolean" | "number" | "bigint" | "string" | "symbol"')]),t._v("),")]),t._v(" "),e("li",[t._v("the pass-by-copy containers ("),e("code",[t._v('"copyArray" | "copyRecord"')]),t._v(") that\ncontain other Passables,")]),t._v(" "),e("li",[t._v("and the special cases ("),e("code",[t._v('"error" | "promise"')]),t._v("), which\nalso contain other Passables.")]),t._v(" "),e("li",[t._v("so-called "),e("code",[t._v("PassableCap")]),t._v(" leafs ("),e("code",[t._v('"remotable" | "promise"')]),t._v(").")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Check `passStyleOf` when handling untrusted structured data")]),t._v(" "),e("p",[t._v("Just as you would use "),e("code",[t._v("typeof")]),t._v(" to check that an argument is\na string or number, use "),e("code",[t._v("passStyleOf")]),t._v(" to when you expect, say, a "),e("code",[t._v("copyRecord")]),t._v(";\nthis prevents malicious clients from playing tricks with cyclic data etc.")])]),t._v(" "),e("h2",{attrs:{id:"far-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#far-api"}},[t._v("#")]),t._v(" "),e("code",[t._v("Far()")]),t._v(" API")]),t._v(" "),e("p",[e("code",[t._v("Far(farName, object-with-methods)")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("farName")]),t._v(" "),e("code",[t._v("{ String }")])]),t._v(" "),e("li",[e("code",[t._v("object-with-methods")]),t._v(" "),e("code",[t._v("{ Object }")]),t._v(" "),e("code",[t._v("[remotable={}]")])]),t._v(" "),e("li",[t._v("Returns: A "),e("code",[t._v("Remotable")]),t._v(" object.")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("farName")]),t._v(" parameter gives the "),e("code",[t._v("Remotable")]),t._v(" an "),e("em",[t._v("interface name")]),t._v(" for debugging purposes, which only shows\nup when logged through the "),e("code",[t._v("console")]),t._v(", for example with "),e("code",[t._v("console.log")]),t._v(".")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("object-with-methods")]),t._v(" parameter should be an object whose properties are the functions serving\nas the object's methods.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("Far()")]),t._v(" function marks an object as remotable.  "),e("code",[t._v("Far()")]),t._v(" also:")]),t._v(" "),e("ul",[e("li",[t._v("Hardens the object.")]),t._v(" "),e("li",[t._v("Checks that all property values are functions and throws otherwise.\n"),e("ul",[e("li",[t._v("accessors ("),e("code",[t._v("get()")]),t._v(" and "),e("code",[t._v("set()")]),t._v(") are not allowed.")])])]),t._v(" "),e("li",[t._v("Records the object's interface name.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Avoid accidental exports")]),t._v(" "),e("p",[t._v("If an object should never be exposed to other vats, you should make it\na point "),e("strong",[t._v("not")]),t._v(" to use "),e("code",[t._v("Far()")]),t._v(" on it. If an object is not marked as a remotable but is accidentally\nexposed, an error is thrown. This prevents any vulnerability from such accidental exposure.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);