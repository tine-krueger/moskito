<?php

namespace App\Entity;

use App\Repository\CampsiteFeatureRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CampsiteFeatureRepository::class)
 */
class CampsiteFeature
{
    const TYPE_WLAN = "wlan";
    const TYPE_MUSIC = "music";
    const TYPE_ANIMATION = "animation";
    const TYPE_FIRE = "fire";
    const TYPE_PATH = "path";
    const TYPE_BULLI = "bulli";
    const TYPE_TENTS = "tents";
    const TYPE_SUBDEVISION = "subdevision";
    const TYPE_PERMANENT = "permanent";
    const TYPE_SIZE = "size";
    const TYPE_BIO = "bio";
    const TYPE_SNACK = "snack";
    const TYPE_ANIMALS = "animals";
    const TYPE_SEASIDE = "seaside";
    const TYPE_BATHING = "bathing";
    const TYPE_FOREST = "forest"; 


    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Campsite::class, inversedBy="campsiteFeatures", cascade={"persist", "remove" })
     */
    private $campsite;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $type;

    /**
     * @ORM\Column(type="boolean")
     */
    private $value;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCampsite(): ?Campsite
    {
        return $this->campsite;
    }

    public function setCampsite(?Campsite $campsite): self
    {
        $this->campsite = $campsite;

        return $this;
    }

    

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        if (!in_array($type, array(
            self::TYPE_WLAN, 
            self::TYPE_MUSIC, 
            self::TYPE_ANIMATION, 
            self::TYPE_FIRE,
            self::TYPE_PATH,
            self::TYPE_BULLI,
            self::TYPE_TENTS,
            self::TYPE_SUBDEVISION,
            self::TYPE_PERMANENT,
            self::TYPE_SIZE,
            self::TYPE_BIO,
            self::TYPE_SNACK,
            self::TYPE_ANIMALS,
            self::TYPE_SEASIDE,
            self::TYPE_BATHING,
            self::TYPE_FOREST))) {
            throw new \InvalidArgumentException($type . " is not a valid Campsite-feature!");
        }

        $this->type = $type;

        return $this;
    }

    public function getValue(): ?bool
    {
        return $this->value;
    }

    public function setValue(bool $value): self
    {
        $this->value = $value;

        return $this;
    }
}
