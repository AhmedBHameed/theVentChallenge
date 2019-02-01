/**
 * Clean any string from html tags an exclude some tags as wanted by passing [white tags] argument like "span|div|section"
 * @param {string} string
 * @param {string} white [Optional]
 * @param {string} black [Optional]
 */
const sanitizeHTML = (string, white, black) => {
  if (!white) white = "b|i|p|br"; //allowed tags [Optional]
  if (!black) black = "script|object|embed"; //complete remove tags
  var e = new RegExp(
    "(<(" +
      black +
      ")[^>]*>.*</\\2>|(?!<[/]?(" +
      white +
      ")(\\s[^<]*>|[/]>|>))<[^<>]*>|(?!<[^<>\\s]+)\\s[^</>]+(?=[/>]))",
    "gi"
  );
  return string && typeof string === "string" ? string.replace(e, "") : string;
};

module.exports = sanitizeHTML;
