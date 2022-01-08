﻿// <auto-generated />
using System;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20220108204655_ExtendedUser")]
    partial class ExtendedUser
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.0");

            modelBuilder.Entity("API.Entities.CarePlan", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Communication")
                        .HasColumnType("TEXT");

                    b.Property<string>("ContinenceCare")
                        .HasColumnType("TEXT");

                    b.Property<string>("EolPref")
                        .HasColumnType("TEXT");

                    b.Property<string>("InterestsAndHobbies")
                        .HasColumnType("TEXT");

                    b.Property<string>("LevelOfUnderstanding")
                        .HasColumnType("TEXT");

                    b.Property<string>("Medication")
                        .HasColumnType("TEXT");

                    b.Property<string>("MentalHealth")
                        .HasColumnType("TEXT");

                    b.Property<string>("Mobility")
                        .HasColumnType("TEXT");

                    b.Property<string>("NutritionAndHydration")
                        .HasColumnType("TEXT");

                    b.Property<string>("OralCare")
                        .HasColumnType("TEXT");

                    b.Property<int>("PatientId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("PersonalCare")
                        .HasColumnType("TEXT");

                    b.Property<string>("ReligiousAndCulturalBeliefs")
                        .HasColumnType("TEXT");

                    b.Property<string>("SkinCare")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("CarePlans");
                });

            modelBuilder.Entity("API.Entities.Patient", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("CarePlanId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<int?>("StaffUserId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("StaffUserId");

                    b.ToTable("Patients");
                });

            modelBuilder.Entity("API.Entities.Photo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsMain")
                        .HasColumnType("INTEGER");

                    b.Property<string>("PublicId")
                        .HasColumnType("TEXT");

                    b.Property<int>("StaffUserId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Url")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("StaffUserId");

                    b.ToTable("Photos");
                });

            modelBuilder.Entity("API.Entities.StaffUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Address")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Created")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("TEXT");

                    b.Property<string>("FullName")
                        .HasColumnType("TEXT");

                    b.Property<string>("Gender")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsAdmin")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("LastActive")
                        .HasColumnType("TEXT");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    b.Property<string>("PatientList")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("API.Entities.Patient", b =>
                {
                    b.HasOne("API.Entities.StaffUser", null)
                        .WithMany("Patients")
                        .HasForeignKey("StaffUserId");
                });

            modelBuilder.Entity("API.Entities.Photo", b =>
                {
                    b.HasOne("API.Entities.StaffUser", "StaffUser")
                        .WithMany("Photos")
                        .HasForeignKey("StaffUserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("StaffUser");
                });

            modelBuilder.Entity("API.Entities.StaffUser", b =>
                {
                    b.Navigation("Patients");

                    b.Navigation("Photos");
                });
#pragma warning restore 612, 618
        }
    }
}
