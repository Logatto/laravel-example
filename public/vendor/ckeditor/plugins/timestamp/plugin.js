CKEDITOR.plugins.add( 'timestamp', {
    // icons: 'timestamp.png',
    init: function( editor ) {
        //Plugin logic goes here.

        editor.addCommand( 'insertTimestamp', {
            exec: function( editor ) {
                var now = new Date();
                editor.insertHtml( 'The current date and time is: <em>' + now.toString() + '</em>' );
            }
        });

        editor.ui.addButton( 'Timestamp', {
            label: 'Insert Timestamp',
            command: 'insertTimestamp',
            toolbar: 'insert',
            icon: 'https://avatars1.githubusercontent.com/u/5500999?v=2&s=16'
        });

    }
});