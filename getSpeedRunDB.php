<?php
/**
 * Created by IntelliJ IDEA.
 * User: chico_percedes
 * Date: 2016-05-18
 * Time: 8:29 PM
 * 
 * The following file returns a table using the informaiton found in the Database
 */
echo "
<table class=\"table table-hover\">
				<thead>
					<tr>
						<th class=\"text-center\">Rank</th>
						<th class=\"text-center\">Username</th>
						<th class=\"text-center\">Score</th>
					</tr>
				</thead>

				<tbody>

";

do {
    $getUsername = $databaseConnection->prepare("SELECT * FROM logicolorusers WHERE user_id = :user_id");
    $getUsername->bindParam(':user_id', $row['user_id']);
    $getUsername->execute();
    $result = $getUsername->fetch(PDO::FETCH_ASSOC);
    echo "<tr><td class=\"text-center\">{$rank}</td>
				<td class=\"text-center\">{$result['username']}</td>
				<td class=\"text-center\">{$row['speedscore']}</td></tr>";

    $rank++;
} while ($row = $records->fetch(PDO::FETCH_ASSOC));

echo "
				</tbody>
	</table>
";