using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class patientprop3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CarePlans_Patients_Id",
                table: "CarePlans");

            migrationBuilder.AddColumn<int>(
                name: "CarePlanId",
                table: "Patients",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "CarePlans",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<int>(
                name: "PatientId1",
                table: "CarePlans",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CarePlans_PatientId1",
                table: "CarePlans",
                column: "PatientId1");

            migrationBuilder.AddForeignKey(
                name: "FK_CarePlans_Patients_PatientId1",
                table: "CarePlans",
                column: "PatientId1",
                principalTable: "Patients",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CarePlans_Patients_PatientId1",
                table: "CarePlans");

            migrationBuilder.DropIndex(
                name: "IX_CarePlans_PatientId1",
                table: "CarePlans");

            migrationBuilder.DropColumn(
                name: "CarePlanId",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "PatientId1",
                table: "CarePlans");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "CarePlans",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddForeignKey(
                name: "FK_CarePlans_Patients_Id",
                table: "CarePlans",
                column: "Id",
                principalTable: "Patients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
