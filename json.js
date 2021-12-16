function csvJSON(csv) {

    var lines = csv.split("\n");

    var result = [];
    const separator = ',';
    var headers = lines[0].split(separator);

    for (var i = 1; i < lines.length; i++) {

        var obj = {};
        var currentline = lines[i].split(separator);

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        if (lines[i].trim().length > 0) {
            result.push(obj);
        }
    }

    return result;
}

ctx.res.body = csvJSON(req.data.toString());
        return ctx;