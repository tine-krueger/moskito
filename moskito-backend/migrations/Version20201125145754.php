<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201125145754 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE campsite_feature (id INT AUTO_INCREMENT NOT NULL, campsite_id INT DEFAULT NULL, type VARCHAR(30) NOT NULL, value TINYINT(1) NOT NULL, INDEX IDX_19823E1FF63910C0 (campsite_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE campsite_feature ADD CONSTRAINT FK_19823E1FF63910C0 FOREIGN KEY (campsite_id) REFERENCES campsite (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE campsite_feature');
    }
}
