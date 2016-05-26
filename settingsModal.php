<!-- Settings modal! -->
<!-- Below, we have the code for the complete modal. The code is divided by header, body, and footer -->
<div id="settingsModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <div class="row">
                    <div class="col-xs-8"></div>
                    <div class="col-xs-4">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                </div>
                <div class="row heading">
                    <div class="col-xs-12 text-center">
                        <h2 class="modal-title">Settings</h2>
                    </div>
                </div>
            </div>

            <div class="modal-body">

                <div class="row">
                    <div class="col-xs-12">
                        <h5>Music Volume</h5>
                    </div>
                    <div class="col-xs-12">
                        <input type="range" id="musicslider" class="slider" min="0" max="10" value="5" step="1" onChange="musicChange(this.value)" style="width:200px;"/>
                    </div>
                    <div class="col-xs-12">
                        <span id="musicVal"></span>
                    </div>
                    <div class="col-xs-12">
                        <h5>SFX Volume</h5>
                    </div>
                    <div class="col-xs-12">
                        <input type="range" id="sfxslider" class="slider" min="0" max="10" value="5" step="1" onChange="sfxChange(this.value)" style="width:200px;"/>
                    </div>
                    <div class="col-xs-12">
                        <span id="sfxVal"></span>
                    </div>
                </div>
            </div>

            <!-- Still working on the volume slider. -->
            <script>
                var sound = document.getElementById("sound");

                function volumeControl() {
                    var x = document.getElementById("slider").value;
                    sound.volume = (x * 0.1);
                }
            </script>

            <div class="modal-footer">
                <button type="button" class="btn" data-dismiss="modal">Back</button>
            </div>

        </div>

    </div>
</div>
<!-- End of the modal -->