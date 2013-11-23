/*
 * THIS FILE IS AUTO GENERATED from 'lib/parse/value_parser.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "parse/parse", "khepri_ast/value", "khepri/parse/token_parser"], (function(require, exports, __o, ast_value, token) {
    "use strict";
    var literal, nullLiteral, booleanLiteral, numericLiteral, stringLiteral, regularExpressionLiteral, identifier;
    var __o = __o,
        always = __o["always"],
        bind = __o["bind"],
        choice = __o["choice"],
        Parser = __o["Parser"],
        ast_value = ast_value,
        token = token;
    var literalParser = (function(kind, p) {
        return bind(p, (function(x) {
            return always(ast_value.Literal.create(x.loc, kind, x.value));
        }));
    });
    (nullLiteral = Parser.bind(null, "Null Literal")(literalParser("null", token.nullLiteral)));
    (booleanLiteral = Parser.bind(null, "Boolean Literal")(literalParser("boolean", token.booleanLiteral)));
    (numericLiteral = Parser.bind(null, "Numeric Literal")(literalParser("number", token.numericLiteral)));
    (stringLiteral = Parser.bind(null, "String Literal")(literalParser("string", token.stringLiteral)));
    (regularExpressionLiteral = Parser.bind(null, "Regular Expression Literal")(literalParser("regexp", token.regularExpressionLiteral)));
    (literal = Parser.bind(null, "Literal")(choice(nullLiteral, booleanLiteral, numericLiteral, stringLiteral, regularExpressionLiteral)));
    (identifier = Parser.bind(null, "Identifier")(bind(token.anyIdentifier, (function(x) {
        return always(ast_value.Identifier.create(x.loc, x.value));
    }))));
    (exports.literal = literal);
    (exports.nullLiteral = nullLiteral);
    (exports.booleanLiteral = booleanLiteral);
    (exports.numericLiteral = numericLiteral);
    (exports.stringLiteral = stringLiteral);
    (exports.regularExpressionLiteral = regularExpressionLiteral);
    (exports.identifier = identifier);
}))