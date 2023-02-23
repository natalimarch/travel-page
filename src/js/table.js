const table = $('#memListTable').DataTable({
  pagingType: 'simple',
  searching: false,
  lengthMenu: [20, 50, 75, 'All'],
  sDom: 'Lfr<"wrapper-table"t><"footer"<"info"i><"length"l><"table-btn"p>>',
  language: {
    lengthMenu: 'Rows per page: _MENU_',
  },
});

$(document).ready(function () {
  table.draw();

  $('#searchInput,#sortBy').bind('keyup change', function () {
    table.draw();
  });
});
