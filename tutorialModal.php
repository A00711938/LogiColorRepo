<script src="Scripts/global.js"></script>
<div id="tutorialModal" class="modal fade" role="dialog">
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
                <h2 class="modal-title">Tutorial</h2>
            </div>
        </div>
    </div>

    <div class="modal-body">

        <div class="row">
            <div class="col-xs-12">
                <button class="btn" onclick="playVid();musicVol = 0;" type="button">Play</button>
                <button class="btn" onclick="pauseVid();musicVol = 5;" type="button">Pause</button><br>

                <video id="tutorialVideo">
                    <source src="Sound/tutorial.mp4" width="90%" type="video/mp4">

                    Your browser does not support HTML5 video.
                </video>

                <script>
                    var vid = document.getElementById("tutorialVideo");

                    function playVid() {
                        vid.play();
                    }

                    function pauseVid() {
                        vid.pause();
                    }

                </script>
            </div>

        </div>
    </div>

    <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">Back</button>
    </div>

</div>
</div>
</div>
<!-- End of the modal -->