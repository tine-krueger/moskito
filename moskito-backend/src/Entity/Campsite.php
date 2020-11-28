<?php

namespace App\Entity;

use App\Repository\CampsiteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CampsiteRepository::class)
 */
class Campsite
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $street;

    /**
     * @ORM\Column(type="string", length=5)
     */
    private $postalCode;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $place;

    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     */
    private $telephone;

    /**
     * @ORM\Column(type="string", length=40, nullable=true)
     */
    private $email;

    /**
     * @ORM\Column(type="decimal", precision=11, scale=8)
     */
    private $longitude;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=8)
     */
    private $latitude;

    /**
     * @ORM\OneToMany(targetEntity=CampsiteFeature::class, mappedBy="campsite", cascade={"persist", "remove" })
     */
    private $campsiteFeatures;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="campsite")
     */
    private $users;

    public function __construct()
    {
        $this->campsiteFeatures = new ArrayCollection();
        $this->users = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getStreet(): ?string
    {
        return $this->street;
    }

    public function setStreet(string $street): self
    {
        $this->street = $street;

        return $this;
    }

    public function getPostalCode(): ?string
    {
        return $this->postalCode;
    }

    public function setPostalCode(string $postalCode): self
    {
        $this->postalCode = $postalCode;

        return $this;
    }

    public function getPlace(): ?string
    {
        return $this->place;
    }

    public function setPlace(string $place): self
    {
        $this->place = $place;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(?string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getLongitude(): ?string
    {
        return $this->longitude;
    }

    public function setLongitude(string $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getLatitude(): ?string
    {
        return $this->latitude;
    }

    public function setLatitude(string $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    /**
     * @return Collection|CampsiteFeature[]
     */
    public function getCampsiteFeatures(): Collection
    {
        return $this->campsiteFeatures;
    }

    public function addCampsiteFeature(CampsiteFeature $campsiteFeature): self
    {
        if (!$this->campsiteFeatures->contains($campsiteFeature)) {
            $this->campsiteFeatures[] = $campsiteFeature;
            $campsiteFeature->setCampsite($this);
        }

        return $this;
    }

    public function removeCampsiteFeature(CampsiteFeature $campsiteFeature): self
    {
        if ($this->campsiteFeatures->removeElement($campsiteFeature)) {
            // set the owning side to null (unless already changed)
            if ($campsiteFeature->getCampsite() === $this) {
                $campsiteFeature->setCampsite(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->addCampsite($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->removeElement($user)) {
            $user->removeCampsite($this);
        }

        return $this;
    }
}
