'use strict';

function onSuccess() {}

jQuery(document).ready(function () {
  $.get(ghost.url.api('posts', {
    include: 'tags,author',
    limit: 'all'
  })).done(onSuccess);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2cuanMiXSwibmFtZXMiOlsib25TdWNjZXNzIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJnZXQiLCJnaG9zdCIsInVybCIsImFwaSIsImluY2x1ZGUiLCJsaW1pdCIsImRvbmUiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsU0FBVCxHQUFxQixDQUFFOztBQUV2QkMsT0FBT0MsUUFBUCxFQUFpQkMsS0FBakIsQ0FBdUIsWUFBTTtBQUMzQkMsSUFBRUMsR0FBRixDQUFNQyxNQUFNQyxHQUFOLENBQVVDLEdBQVYsQ0FBYyxPQUFkLEVBQXVCO0FBQzNCQyxhQUFTLGFBRGtCO0FBRTNCQyxXQUFPO0FBRm9CLEdBQXZCLENBQU4sRUFHSUMsSUFISixDQUdTWCxTQUhUO0FBSUQsQ0FMRCIsImZpbGUiOiJibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gb25TdWNjZXNzKCkge31cblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICQuZ2V0KGdob3N0LnVybC5hcGkoJ3Bvc3RzJywge1xuICAgIGluY2x1ZGU6ICd0YWdzLGF1dGhvcicsXG4gICAgbGltaXQ6ICdhbGwnLFxuICB9KSkuZG9uZShvblN1Y2Nlc3MpO1xufSk7XG4iXX0=
