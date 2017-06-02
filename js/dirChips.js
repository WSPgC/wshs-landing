function createChip($dirChip) {
  var chipName = String($dirChip);
  var chipID = chipName.replace(/\s+/g, '');

  var chip = "<div id='" + chipID + "' class='chip'>" + chipName + "<i class='material-icons add' onclick='addChip(\"" + chipName + "\")'>add</i></div>";
  $('#addChipLine').append(chip);

  $('#finalChipLine').isotope({
    masonry: {
      columnWidth: 1
    }
  });

  $('#finalChipLine').isotope('layout');
  // $('#addChipLine').isotope('layout');

}

createChip('Art');
createChip('Bilingual');
createChip('Business and Marketing');
createChip('English');
createChip('FACE');
createChip('Guidance');
createChip('Libary');
createChip('Math');
createChip('Music');
createChip('Physical Ed');
createChip('Science');
createChip('Secretaries');
createChip('Social Studies');
createChip('Special Ed');
createChip('Support Staff');
createChip('Tech Ed');
createChip('World Language');

function addChip($dirChip) {
  var chipName = String($dirChip);
  var chipID = chipName.replace(/\s+/g, '');

  $('#addChipLine').isotope({
    masonry: {
      columnWidth: 1
    }
  });

  $('#' + chipID).remove();
  $('#addChipLine').isotope('layout');

  var chip = "<div id='" + chipID + "' class='chip'>" + chipName + "<i class='material-icons close' onclick='createChip(\"" + chipName + "\")'>close</i></div>";
  $('#finalChipLine').append(chip);
}
