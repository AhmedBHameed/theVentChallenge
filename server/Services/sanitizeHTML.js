const sanitizeHTML = (string, white, black) => {
  if (!white) white = "b|i|p|br"; //allowed tags
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
