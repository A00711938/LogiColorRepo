<!-- Rewards modal! -->
<!-- Below, we have the code for the complete modal. The code is divided by header, body, and footer -->
<div id="rewardsModal" class="modal fade" role="dialog">
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
                        <h2 class="modal-title">Rewards</h2>
                    </div>
                </div>
            </div>
            <!-- We use AJAX to append the rewards here -->
            <div class="modal-body" id="rewardQuery"></div>

            <div class="modal-footer">
                <button type="button" class="btn" data-dismiss="modal">Back</button>
            </div>

        </div>

    </div>
</div>
<!-- End of the modal -->