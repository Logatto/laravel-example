CKEDITOR.plugins.add('acordes', {
    init: function(editor) {
        var siteName = 'blenderartists';
        var bbCodeTag = 'acordes';

        var trim = function(str) {
            return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        };

        editor.addCommand('openSketchfabDialog', new CKEDITOR.dialogCommand('openSketchfabDialog'));

        editor.ui.addButton('Acordes', {
            label: 'Embed a 3D model from Sketchfab',
            command: 'openSketchfabDialog',
            icon: this.path + 'images/sketchfab-favicon.png'
        });

        var logoPath = this.path + 'images/sketchfab-logo.png';


        var acordes = [
            ["Select ","NULL"],
            ["C",1],
            ["C#",2],
            ["D",3],
            ["D#",4],
            ["E",5],
            ["F",6],
            ["F#",7],
            ["G",8],
            ["G#",9],
            ["A",10],
            ["A#",11],
            ["B",12],
            
        ];

        var combinaciones = [
            ["Select ","NULL"],
            ["",1],
            ["m",2],
            ["5",3],
            ["7",4],
            ["maj7",5],
            ["m7",6],
            ["sus4",7],
            ["add9",8],
            ["sus2",9],
            ["7sus4",10],
            ["7#9",11],
            ["9",12],
            
        ];

        CKEDITOR.dialog.add('openSketchfabDialog', function(editor) {
            return {
                title: 'Insert Cords',
                minWidth: 400,
                minHeight: 120,
                contents: [{
                    id: 'general',
                    label: 'Settings',
                    elements:  [
                        {
                            type: 'select',
                            id: 'acorde',
                            label: 'Select cord',
                            items: acordes,
                            'default': "NULL",
                            onChange: function( api ) {
                                // this = CKEDITOR.ui.dialog.select
                                // alert( 'Current value: ' + this.getValue() );
                            },
                            commit: function(data) {
                                
                                var input = this.getInputElement().$;
                                var acorde = input.options[ input.selectedIndex ].text 
                                data.id_acorde = this.getValue();
                                data.acorde = acorde;
                            }
                        },

                        {
                            type: 'select',
                            id: 'combinacio',
                            label: 'Select ...',
                            items: combinaciones,
                            'default': "NULL",
                            onChange: function( api ) {
                                // this = CKEDITOR.ui.dialog.select
                                // alert( 'Current value: ' + this.getValue() );
                            },
                            commit: function(data) {
                                
                                var input = this.getInputElement().$;
                                var combinacion = input.options[ input.selectedIndex ].text 
                                data.id_combinacion = this.getValue();
                                data.combinacion = combinacion;
                            }
                        },
                        
                        
                        /*
                        {
                        type: 'html',
                        html: '<img style="float: left; width: 34px; margin-right: 5px; margin-bottom: 8px;" src="' + logoPath + '"/>' +
                              '<p style="margin-top: 12px; font-weight: bold;">Embed a 3D model from <a style="margin-top: 12px; font-weight: bold;" target="_blank" href="https://sketchfab.com/?utm_source=' + siteName + '&utm_medium=cke-plugin&utm_content=toplink&utm_campaign=' + siteName +'-cke-plugin"">sketchfab.com</a> in your post</p>'
                    }, {
                        type : 'text',
                        id : 'url',
                        label : 'Model url <span style="font-style:italic; font-size: 0.8em; line-height: 20px;">(example: https://sketchfab.com/show/x4ATBGtYWDF0yOyoi13xTwG9gkm)</span>',
                        validate : function() {
                            var url = this.getValue();
                            url = trim(url);
                            var regexp = /^(http|https):\/\/sketchfab.com\/(show|models)\/([^/]+)$/;
                            if (!regexp.test(url)) {
                                alert('Please enter a valid model url.\n\n' +
                                      '(example: https://sketchfab.com/models/x4ATBGtYWDF0yOyoi13xTwG9gkm)');
                                return false;
                            }
                            return true;
                        },
                        required : true,
                        commit: function(data) {
                            var url = this.getValue();
                            url = trim(url);
                            var modelId = url.substring(url.lastIndexOf('/') + 1);
                            data.modelId = modelId;
                        }
                    }, {
                        type: 'html',
                        html: '<p style="margin: 10px 0;"><a style="text-decoration:underline;" href="https://sketchfab.com/?utm_source=' + siteName + '&utm_medium=cke-plugin&utm_content=bottomlink&utm_campaign=' + siteName +'-cke-plugin" target="_blank">Sketchfab</a> is a free web service to publish interactive 3D models online without plugin.</p>'
                    }*/
                    ]
                }],
                onOk: function() {
                    var dialog = this,
                        data = {};
                        this.commitContent(data);
                        link = editor.document.createElement( 'a' );

                        link.setHtml( data.acorde+ data.combinacion);
                        link.setAttribute("id","cord_"+data.id_acorde+"_"+data.id_combinacion);
                        link.setAttribute( 'href',"#" );
                        link.setAttribute( 'class',"acordes" );


                    
                    // var element = CKEDITOR.dom.element.createFromHtml("<a>"+data.acorde+ data.combinacion +"</a>");
                    // editor.insertHtml(element);
                    editor.insertElement(link);
                    // editor.insertText('[' + bbCodeTag +']' +data.acorde+ data.combinacion + '[/' + bbCodeTag +']');
                }
            };
        });
    }
});











/*CKEDITOR.plugins.add( 'acordes',
{   
   requires : ['richcombo'], //, 'styles' ],
   init : function( editor )
   {
      var config = editor.config,
          lang = editor.lang.format;

      // Gets the list of tags from the settings.
      var tags = []; //new Array();
      //this.add('value', 'drop_text', 'drop_label');
      tags[0]=["[contact_name]", "Name", "Name"];
      tags[1]=["[contact_email]", "email", "email"];
      tags[2]=["[contact_user_name]", "User name", "User name"];



      var acordes = [
        {id_acorde: 1,  titulo : "Do",    cod_americano  : "C"},
        {id_acorde: 2,  titulo : "Do#",   cod_americano : "C#"},
        {id_acorde: 3,  titulo : "Re",    cod_americano  : "D"},
        {id_acorde: 4,  titulo : "Re#",   cod_americano : "D#"},
        {id_acorde: 5,  titulo : "Mi",    cod_americano  : "E"},
        {id_acorde: 6,  titulo : "Fa",    cod_americano  : "F"},
        {id_acorde: 7,  titulo : "Fa#",   cod_americano : "F#"},
        {id_acorde: 8,  titulo : "Sol",   cod_americano : "G"},
        {id_acorde: 9,  titulo : "Sol#",  cod_americano: "G#"},
        {id_acorde: 10, titulo : "La",    cod_americano  : "A"},
        {id_acorde: 11, titulo : "La#",   cod_americano : "A#"},
        {id_acorde: 12, titulo : "Si",    cod_americano  : "B"},
    ];




      // Create style objects for all defined styles.

      editor.ui.addRichCombo( 'tokens',
         {
            label : "Insert cord",
            title :"Insert cord",
            voiceLabel : "Insert cord",
            className : 'cke_format',
            multiSelect : true,

            panel :
            {
               css : [ config.contentsCss, CKEDITOR.getUrl( editor.skinPath + 'editor.css' ) ],
               voiceLabel : lang.panelVoiceLabel
            },

            init : function()
            {
               this.startGroup( "Acordes" );
               //this.add('value', 'drop_text', 'drop_label');
               for (var this_tag in acordes){
                  this.add(acordes[this_tag][0], acordes[this_tag].cod_americano, acordes[this_tag].cod_americano);
               }
            },

            onClick : function( value )
            {         
               editor.focus();
               editor.fire( 'saveSnapshot' );
               editor.insertHtml(value);
               editor.fire( 'saveSnapshot' );
            }
         });
   }
});*/








// CKEDITOR.plugins.add( 'acordes',
// {
//    requires : [ 'dialog' ],
//    init : function( editor )
//    {
//       var command = editor.addCommand( 'acordes', new CKEDITOR.dialogCommand( 'acordes' ) );
 
//       editor.ui.addButton( 'MyPlugin',
//          {
//          label : 'ids:My label...',
//          command : 'acordes',
//          icon: 'https://avatars1.githubusercontent.com/u/5500999?v=2&s=16'
//       });
 
//       CKEDITOR.dialog.add( 'acordes', this.path + 'dialogs/acordes.js' );
//    }
// });