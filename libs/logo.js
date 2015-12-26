module.exports = function(reasy) {
    /*
       //////    ///////    //      /////   //    ///
      //    //  //         ///    //   //   //  ///
     //    //  //        // //    //        // //
    ///////   ///////   //  //     ////     ///
   //   /    //       ///////  /     //     //
  //    /   //       //    //  //  ///     //
 //     // //////// //     //   ///       // 
    */
    reasy.cli.version = function() {

        var logo = '';

        if (reasy.util.isWin()) {

           logo = '\n\n' +
                  '        //////    '.bold.red + '///////'.bold.yellow + '    //     '.bold.blue + ' /////  '.bold.green + ' //    ///\n'.bold.white +
                  '       //    //  '.bold.red + '//     '.bold.yellow + '    ///    '.bold.blue + '//   // '.bold.green + '  //  /// \n'.bold.white +
                  '      //    //  '.bold.red + '//     '.bold.yellow + '   // //   '.bold.blue + ' //     '.bold.green + '   // //   \n'.bold.white +
                  '     ///////   '.bold.red + '///////'.bold.yellow + '   //  //  '.bold.blue + '   //// '.bold.green + '    ///     \n'.bold.white +
                  '    //   /    '.bold.red + '//     '.bold.yellow + '  ///////  '.bold.blue + '/     //'.bold.green + '     //      \n'.bold.white +
                  '   //    /   '.bold.red + '//     '.bold.yellow + '  //    // '.bold.blue + ' //  ///'.bold.green + '     //       \n'.bold.white +
                  '  //     // '.bold.red + '////////'.bold.yellow + ' //     //'.bold.blue + '   ///  '.bold.green + '     //        \n'.bold.white;

        } else {

            logo = '\n\n' +
                   '       //////    ///////    //      /////   //    /// \n' +          
                   '      //    //  //         ///    //   //   //  ///   \n' +        
                   '     //    //  //        // //    //        // //     \n' +      
                   '    ///////   ///////   //  //     ////     ///       \n' +    
                   '   //   /    //       ///////  /     //     //        \n' +   
                   '  //    /   //       //    //  //  ///     //         \n' +  
                   ' //     // //////// //     //   ///       //          \n'; 
        }
        console.log(logo + '\n  Reasy v' + reasy.cli.info.version);
    };
};