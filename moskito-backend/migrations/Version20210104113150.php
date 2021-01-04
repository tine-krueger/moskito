<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210104113150 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE campsite (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, street VARCHAR(255) NOT NULL, postal_code VARCHAR(5) NOT NULL, place VARCHAR(30) NOT NULL, telephone VARCHAR(30) DEFAULT NULL, email VARCHAR(40) DEFAULT NULL, longitude NUMERIC(11, 8) NOT NULL, latitude NUMERIC(10, 8) NOT NULL, web VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE campsite_feature (id INT AUTO_INCREMENT NOT NULL, campsite_id INT DEFAULT NULL, type VARCHAR(30) NOT NULL, value TINYINT(1) NOT NULL, INDEX IDX_19823E1FF63910C0 (campsite_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, first_name VARCHAR(60) NOT NULL, last_name VARCHAR(160) NOT NULL, email VARCHAR(60) NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_campsite (user_id INT NOT NULL, campsite_id INT NOT NULL, INDEX IDX_F3B5F1D3A76ED395 (user_id), INDEX IDX_F3B5F1D3F63910C0 (campsite_id), PRIMARY KEY(user_id, campsite_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_token (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, value VARCHAR(255) NOT NULL, valid_until DATETIME NOT NULL, INDEX IDX_BDF55A63A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE campsite_feature ADD CONSTRAINT FK_19823E1FF63910C0 FOREIGN KEY (campsite_id) REFERENCES campsite (id)');
        $this->addSql('ALTER TABLE user_campsite ADD CONSTRAINT FK_F3B5F1D3A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_campsite ADD CONSTRAINT FK_F3B5F1D3F63910C0 FOREIGN KEY (campsite_id) REFERENCES campsite (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_token ADD CONSTRAINT FK_BDF55A63A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE campsite_feature DROP FOREIGN KEY FK_19823E1FF63910C0');
        $this->addSql('ALTER TABLE user_campsite DROP FOREIGN KEY FK_F3B5F1D3F63910C0');
        $this->addSql('ALTER TABLE user_campsite DROP FOREIGN KEY FK_F3B5F1D3A76ED395');
        $this->addSql('ALTER TABLE user_token DROP FOREIGN KEY FK_BDF55A63A76ED395');
        $this->addSql('DROP TABLE campsite');
        $this->addSql('DROP TABLE campsite_feature');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_campsite');
        $this->addSql('DROP TABLE user_token');
    }
}
