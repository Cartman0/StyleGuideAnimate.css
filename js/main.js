$(function(){
    var anime_attributes = {
      'attention-seekers': 'Attention Seekers',
      'bouncing-entrances': 'Bouncing Entrances',
      'bouncing-exits': 'Bouncing Exits',
      'fading-entrances': 'Fading Entrances',
      'fading-exits': 'Fading Exits',
      'flippers': 'Flippers',
      'lightspeed': 'LightSpeed',
      'rotating-entrances': 'Rotating Entrances',
      'rotating-exits': 'Rotating Exits',
      'sliding-entrances': 'Sliding Entrances',
      'sliding-exits': 'Sliding Exits',
      'zoom-entrances': 'Zoom Entrances',
      'zoom-exits': 'Zoom Exits',
      'specials': 'Specials'
    };

    // optionを全て非表示へ
    $('.animateSelectBox_op_animateType').css('display', 'none');
    // 初期optionのみ表示へ
    $('.animateSelectBox_op_animateType_' + 'attention-seekers').css('display', 'block');
    // codeを非表示
    $('.code').css('display', 'none');

    // .animateSelectBox_select_animateAttributesのセレクトボックスの場合
    $('.animateSelectBox_select_animateAttributes').change(function(e) {

      // 指定のanimatetypeをnone->blockへ
      var attribute = $(this).val();
      $('.animateSelectBox_op_animateType').css('display', 'none');
      $('.animateSelectBox_op_animateType_'+ attribute).css('display', 'block');

      //.animate-attributeへテキスト追加
      $('.animate-attribute').text(anime_attributes[attribute]);

      // arrowにeffect
      $('.animateSelectBox_arrow')
      .addClass('animated ' + 'flash')
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          // You can also detect when an animation ends:
          $(this).removeClass('animated ' + 'flash');
      });
    });

    // .animateSelectBox_select_animateTypeのセレクトボックスの場合
    $('.animateSelectBox_select_animateType').change(function(e) {
      var animate_name = $(this).val();
      if (!animate_name){
        return false;
      }

      $('.animate-type').text(animate_name);

      // animateのアニメを追加
      $('.title_child')
      .addClass('animated ' + animate_name)
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          // You can also detect when an animation ends:
          $(this).removeClass('animated ' + animate_name);

          // animateが終わったらcodeを表示へ
          // codeに, 選択したanimate-nameを追加
          $('.animate-name').text(animate_name);
          // codeを表示へ
          $('.code').css('display', 'block');
          $('.code')
          .addClass('animated ' + 'fadeIn')
          .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              // You can also detect when an animation ends:
              $(this).removeClass('animated ' + 'fadeIn');
          });
      });



    });
});
