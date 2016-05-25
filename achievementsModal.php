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

            <div class="modal-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="text-center">Badge</th>
                                <th class="text-center"></th>
                            </tr>
                        </thead>
                        <!-- We use AJAX to append the rewards here -->
                        <tbody id="rewardQuery"></tbody>
                        <tbody>
                        <div class="row">
                        <div class="col-xs-2 text-center">
                            <img src="images/pokemon/icons/155.png" class="">
                        </div>
                        <div class="col-xs-10">
                            <h5>You just earned your first badge. Welcome to Logicolor!</h5>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-2 text-center">
                                <img src="images/pokemon/icons/155.png" class="">
                            </div>
                            <div class="col-xs-10">
                                <h5>You just earned your first badge. Welcome to Logicolor!</h5>
                            </div>
                        </div>
                        </tbody>
                        
                    </table>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn" data-dismiss="modal">Back</button>
            </div>

        </div>

    </div>
</div>
<!-- End of the modal -->