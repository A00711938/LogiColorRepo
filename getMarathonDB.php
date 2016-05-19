<?php
/**
 * Created by IntelliJ IDEA.
 * User: chico_percedes
 * Date: 2016-05-18
 * Time: 4:41 PM
 * 
 * The following file returns a table using the informaiton found in the Database
 */
//The following do loop calls every row in the array $row and organizes the returned data
//in the format requested.
//Some improvements that can be done:
// 1) Cap queries to show the top 5. Maybe other items can be show sliding sideways, etc.
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
				<td class=\"text-center\">{$row['scores']}</td></tr>";

    $rank++;
} while ($row = $records->fetch(PDO::FETCH_ASSOC));

echo "
				</tbody>
</table>
";