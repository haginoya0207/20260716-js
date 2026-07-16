$(function() {
	// サムネイルをクリック
    $("a").click(function() {
        // body要素の最後にdiv#bgを追加
        $("body").append("<div id='bg'>")
        
        // body要素の最後にdiv#photoを追加
        $("body").append("<div id='photo'>");

        //それぞれ非表示にする
        $("#bg, #photo").hide();

        // #photoの中にimg要素を追加
        $("#photo").html("<img>");

        // img要素にsrc属性とalt属性を設定
        $("#photo img")
        .attr("src", $(this).attr("href"))
        .attr("alt", $(this).attr("alt"));

        // #bgと#photoをフェードイン
        $("#bg, #photo").fadeIn(800);

        //背景をクリック
        $("#bg").click(function() {
            //背景（自分自身）をフェードアウトと、完了後の処理
            $(this).fadeOut(function() {
                $(this).remove(); //#bgを削除
            });

            // #photoもフェードアウトと、完了後の処理
            $("#photo").fadeOut(function() {
                $(this).remove(); //#bgを削除
            });
        });
        return false;
    });
	
});