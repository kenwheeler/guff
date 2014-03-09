###GUFF

Lets keep this shit simple.

[Demo](http://kenwheeler.github.io/guff/)

[Annotated Source](http://kenwheeler.github.io/guff/docs/guff.html)

####Features

####FLEXIBLE TYPOGRAPHY

####BREAKPOINT MIXIN

    div {
        @include breakpoint($desktop){
            width: 100%;
        }
    }

Renders the following media query:

    @media (min-width: 1024px) {
        div {
            width: 100%;
        }
    }

####CONTAINER MIXIN

    // Use on divs wrapping non inline span mixins

    .container {
        @include container();
    }

####SPAN MIXIN

    // cols : int - Column count
    // inline : boolean - Use inline block
    // padding: px - Interior Padding

    @include span(cols, inline, padding)

    // Float Tile
    // Requires container with clear() mixin

    .float-tile {
        @include span(4);
        float: left;
    }

    // Inline Block Tile

    .inline-tile {
        @include span(4, true);
    }

####OFFSET MIXIN

    // cols : int - Column count

    @include offset(cols)

    .float-tile.offset-tile {
        @include @offset(4);
    }

####PREFIX MIXINS

    // Generates browser prefixes for properties

    // Transistion
    @include transition(all 1s linear);

    // Transform
    @include transform(translateZ(0));

    // Box Sizing
    @include box-sizing(border-box);

    // Anything you want
    @include prefixer(text-shadow, 5px, webkit moz ms o);


####REM-CALC()

    // Calculates rem value for px value

    font-size: rem-calc(14);

####HELPER MIXINS

    // Clearfix Mixin
    //
    // &:after {
    // content:"";
    //  display:table;
    //  clear:both;
    // }
    //

    @include clear();

    // Ellipsis Mixin - ellipsis($width)
    //
    // display: inline-block;
    // max-width: $width;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // white-space: nowrap;
    //

    @include ellipsis(200px);

    // Hide Text
    //
    // overflow:hidden;
    // text-indent:-9999px;
    // display:block;
    //

    @include hide-text;

    // Inline List (use on <ul>)
    //
    // list-style-type:none;
    // padding:0;
    //  margin:0;
    //  overflow:hidden;
    //  > li{
    //      display:block;
    //      float:left;
    //      &:last-child{
    //          margin-right:0px;
    //      }
    //  }

    @include inline-list;
